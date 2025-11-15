"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { MapPin, X, Search } from "lucide-react";
import "leaflet/dist/leaflet.css";

const Map = dynamic(() => import("./MapComponent"), { ssr: false });

type EnergySource = "Solar" | "Hydro" | "Wind" | "Biomass" | "Geothermal";
type DeveloperType = "Consultant" | "EPC" | "Developer" | "Investor";

const philippinesCities = [
  "Manila",
  "Quezon City",
  "Davao City",
  "Cebu City",
  "Makati",
  "Taguig",
  "Pasig",
  "Antipolo",
  "Cagayan de Oro",
  "Zamboanga City",
  "Iloilo City",
  "Bacoor",
  "General Santos",
  "Caloocan",
  "Las Piñas",
];

const philippinesProvinces = [
  "Metro Manila",
  "Cebu",
  "Davao del Sur",
  "Laguna",
  "Cavite",
  "Bulacan",
  "Rizal",
  "Pampanga",
  "Batangas",
  "Iloilo",
  "Negros Occidental",
  "Zamboanga del Sur",
];

const philippinesBarangays = [
  "Barangay 1",
  "Barangay 2",
  "Poblacion",
  "San Antonio",
  "San Jose",
  "Santa Cruz",
  "San Miguel",
  "Santo Niño",
  "San Isidro",
  "San Vicente",
];

export default function GridMapPage() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedEnergySource, setSelectedEnergySource] = useState<
    EnergySource | ""
  >("");
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [searchProvince, setSearchProvince] = useState("");
  const [searchBarangay, setSearchBarangay] = useState("");

  // Match form states
  const [matchEnergyType, setMatchEnergyType] = useState<EnergySource | "">("");
  const [targetCapacity, setTargetCapacity] = useState("");
  const [installationType, setInstallationType] = useState("");
  const [targetProvince, setTargetProvince] = useState("");
  const [targetCity, setTargetCity] = useState("");
  const [targetBarangay, setTargetBarangay] = useState("");
  const [developerType, setDeveloperType] = useState<DeveloperType | "">("");

  const filteredCities = useMemo(
    () =>
      philippinesCities.filter((city) =>
        city.toLowerCase().includes(searchCity.toLowerCase())
      ),
    [searchCity]
  );

  const filteredProvinces = useMemo(
    () =>
      philippinesProvinces.filter((province) =>
        province.toLowerCase().includes(searchProvince.toLowerCase())
      ),
    [searchProvince]
  );

  const filteredBarangays = useMemo(
    () =>
      philippinesBarangays.filter((barangay) =>
        barangay.toLowerCase().includes(searchBarangay.toLowerCase())
      ),
    [searchBarangay]
  );

  const getInstallationOptions = () => {
    if (matchEnergyType === "Solar") {
      return ["Rooftop", "Ground-mounted", "Floating"];
    }
    if (matchEnergyType === "Hydro") {
      return ["Run-of-river", "Storage", "Pumped-storage"];
    }
    if (matchEnergyType === "Wind") {
      return ["Onshore", "Offshore"];
    }
    if (matchEnergyType === "Biomass") {
      return ["Direct combustion", "Gasification", "Anaerobic digestion"];
    }
    if (matchEnergyType === "Geothermal") {
      return ["Dry steam", "Flash steam", "Binary cycle"];
    }
    return [];
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Map Container */}
        <div className="absolute inset-0">
          <Map />
        </div>

        {/* Floating Control Panel */}
        <div className="absolute left-4 top-4 z-1000 w-80 max-w-[calc(100vw-2rem)] rounded-xl bg-white/95 p-4 shadow-2xl backdrop-blur-sm md:left-6 md:top-6">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Filter Projects
          </h2>

          {/* City Filter */}
          <div className="mb-3">
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Select City
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search city..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            {searchCity && (
              <div className="mt-1 max-h-40 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                {filteredCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setSelectedCity(city);
                      setSearchCity("");
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
            {selectedCity && (
              <div className="mt-2 flex items-center justify-between rounded-md bg-primary/10 px-3 py-1.5">
                <span className="text-sm font-medium text-primary">
                  {selectedCity}
                </span>
                <button
                  onClick={() => setSelectedCity("")}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Energy Source Filter */}
          <div className="mb-3">
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Renewable Energy Source
            </label>
            <select
              value={selectedEnergySource}
              onChange={(e) =>
                setSelectedEnergySource(e.target.value as EnergySource)
              }
              className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">All Sources</option>
              <option value="Solar">Solar</option>
              <option value="Hydro">Hydro</option>
              <option value="Wind">Wind</option>
              <option value="Biomass">Biomass</option>
              <option value="Geothermal">Geothermal</option>
            </select>
          </div>

          {/* Capacity Range */}
          <div className="mb-3">
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Capacity Range (kW)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 rounded-lg border border-gray-200 py-2 px-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 rounded-lg border border-gray-200 py-2 px-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Project Status */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Project Status
            </label>
            <select className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option value="">All Statuses</option>
              <option value="planning">Planning</option>
              <option value="construction">Under Construction</option>
              <option value="operational">Operational</option>
            </select>
          </div>
        </div>

        {/* Find a Match FAB */}
        <button
          onClick={() => setIsMatchModalOpen(true)}
          className="fixed bottom-6 right-6 z-1000 flex items-center gap-2 rounded-full bg-[#36a03d] px-6 py-2.5 font-semibold text-white shadow-lg shadow-[#36a03d]/20 transition hover:bg-[#2e8230] md:bottom-8 md:right-8"
        >
          <MapPin className="h-5 w-5" />
          <span>Find a Match</span>
        </button>

        {/* Match Modal */}
        {isMatchModalOpen && (
          <div className="fixed inset-0 z-2000 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Find Your Match
                </h2>
                <button
                  onClick={() => setIsMatchModalOpen(false)}
                  className="rounded-full p-1 transition-colors hover:bg-gray-100"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Energy Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Type of Renewable Energy *
                  </label>
                  <select
                    value={matchEnergyType}
                    onChange={(e) => {
                      setMatchEnergyType(e.target.value as EnergySource);
                      setInstallationType("");
                    }}
                    className="w-full rounded-lg border border-gray-300 py-2.5 px-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select energy type</option>
                    <option value="Solar">Solar</option>
                    <option value="Hydro">Hydro</option>
                    <option value="Wind">Wind</option>
                    <option value="Biomass">Biomass</option>
                    <option value="Geothermal">Geothermal</option>
                  </select>
                </div>

                {/* Target Capacity */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Target Capacity (kW) *
                  </label>
                  <input
                    type="number"
                    value={targetCapacity}
                    onChange={(e) => setTargetCapacity(e.target.value)}
                    placeholder="Enter capacity in kW"
                    className="w-full rounded-lg border border-gray-300 py-2.5 px-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Installation Type */}
                {matchEnergyType && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Type of Installation *
                    </label>
                    <select
                      value={installationType}
                      onChange={(e) => setInstallationType(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 py-2.5 px-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select installation type</option>
                      {getInstallationOptions().map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Target Location - Province */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Province *
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search province..."
                      value={searchProvince}
                      onChange={(e) => setSearchProvince(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {searchProvince && (
                    <div className="mt-1 max-h-40 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                      {filteredProvinces.map((province) => (
                        <button
                          key={province}
                          onClick={() => {
                            setTargetProvince(province);
                            setSearchProvince("");
                          }}
                          className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                        >
                          {province}
                        </button>
                      ))}
                    </div>
                  )}
                  {targetProvince && (
                    <div className="mt-2 flex items-center justify-between rounded-md bg-primary/10 px-3 py-1.5">
                      <span className="text-sm font-medium text-primary">
                        {targetProvince}
                      </span>
                      <button
                        onClick={() => setTargetProvince("")}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Target Location - City */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    City *
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search city..."
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {searchCity && (
                    <div className="mt-1 max-h-40 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                      {filteredCities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setTargetCity(city);
                            setSearchCity("");
                          }}
                          className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                  {targetCity && (
                    <div className="mt-2 flex items-center justify-between rounded-md bg-primary/10 px-3 py-1.5">
                      <span className="text-sm font-medium text-primary">
                        {targetCity}
                      </span>
                      <button
                        onClick={() => setTargetCity("")}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Target Location - Barangay */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Barangay *
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search barangay..."
                      value={searchBarangay}
                      onChange={(e) => setSearchBarangay(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {searchBarangay && (
                    <div className="mt-1 max-h-40 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                      {filteredBarangays.map((barangay) => (
                        <button
                          key={barangay}
                          onClick={() => {
                            setTargetBarangay(barangay);
                            setSearchBarangay("");
                          }}
                          className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                        >
                          {barangay}
                        </button>
                      ))}
                    </div>
                  )}
                  {targetBarangay && (
                    <div className="mt-2 flex items-center justify-between rounded-md bg-primary/10 px-3 py-1.5">
                      <span className="text-sm font-medium text-primary">
                        {targetBarangay}
                      </span>
                      <button
                        onClick={() => setTargetBarangay("")}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Developer Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Type of Developer *
                  </label>
                  <select
                    value={developerType}
                    onChange={(e) =>
                      setDeveloperType(e.target.value as DeveloperType)
                    }
                    className="w-full rounded-lg border border-gray-300 py-2.5 px-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select developer type</option>
                    <option value="Consultant">Consultant</option>
                    <option value="EPC">
                      EPC (Engineering, Procurement, Construction)
                    </option>
                    <option value="Developer">Developer</option>
                    <option value="Investor">Investor</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setIsMatchModalOpen(false)}
                    className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 transition-all hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Handle form submission
                      console.log("Finding matches...");
                    }}
                    className="flex-1 rounded-lg bg-primary py-2.5 font-semibold text-white transition-all hover:bg-primary/90 active:scale-95"
                  >
                    Find Matches
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
