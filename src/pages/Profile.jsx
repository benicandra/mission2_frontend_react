{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}
{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}
{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}

import React, { useState, useEffect } from "react";

import InputNama from "../components/formComponents/InputNama";
import InputEmail from "../components/formComponents/InputEmail";
import InputRegion from "../components/formComponents/InputRegion";
import InputNoHp from "../components/formComponents/InputNoHp";
import InputPassword from "../components/formComponents/InputPassword";

import Button from "../components/button/Button";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    nama: "",
    email: "",
    region: "",
    noHp: "",
  });

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    region: "",
    noHp: "",
  });

  useEffect(() => {
    const savedDataString = localStorage.getItem("userProfile");
    if (savedDataString) {
      const savedData = JSON.parse(savedDataString);
      setProfileData(savedData);
      setFormData(savedData);
    }
  }, []);

  const deleteEmail = () => {
    if (window.confirm("Yakin ingin menghapus Email?")) {
      const updateData = { ...profileData, email: "" };
      const updateFormData = { ...formData, email: "" };

      setProfileData(updateData);
      setFormData(updateFormData);

      localStorage.setItem("userProfile", JSON.stringify(updateData));

      alert("perubahan Berhasil disimpan!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(formData));
    setProfileData(formData);
    alert("Perubahan berhasil disimpan");
  };

  return (
    <div className="py-8 px-4 mt-[64px] lg:px-[120px]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Menu */}
          <div className="w-full md:w-64 space-y-2">
            <h4 className="font-semibold text-gray-900">Ubah Profil</h4>
            <p className="text-gray-600 text-sm">Ubah data diri Anda</p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left border border-yellow-300 bg-yellow-50 text-yellow-700 rounded-md hover:bg-yellow-100 transition">
                  <img src="Person.png" alt="Profil Saya" className="w-5 h-5" />
                  <span className="font-medium">Profil Saya</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md transition">
                  <img src="Book.png" alt="Kelas Saya" className="w-5 h-5" />
                  <span className="font-medium">Kelas Saya</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md transition">
                  <img
                    src="ShoppingBasket.png"
                    alt="Pesanan Saya"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Pesanan Saya</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <img
                    src="Avatar.png"
                    alt="Jennie Ruby Jane"
                    className="w-[92px] h-[92px] rounded-sm object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-gray-900">
                    {profileData.nama}
                  </h3>
                  {profileData.email ? (
                    <div className="flex flex-col">
                      <div>
                        <p className="text-sm text-gray-600">
                          {profileData.email}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={deleteEmail}
                          className="text-red-500 text-sm font-semibold"
                          title="Hapus Email"
                        >
                          Hapus email
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 italic text-sm">
                      Email tidak tersedia, mohon tambahkan baru
                    </p>
                  )}
                  <button className="text-red-500 text-sm font-semibold hover:underline">
                    Ganti Foto Profil
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <InputNama
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                />
                <InputEmail
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="flex items-end gap-2 lg:col-span-2">
                  <InputRegion
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                  />
                  <InputNoHp
                    name="noHp"
                    value={formData.noHp}
                    onChange={handleChange}
                  />
                </div>
                <InputPassword
                  label="Kata Sandi"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <InputPassword
                  label="Konfirmasi Kata Sandi"
                  name="konfirmasiPassword"
                  value={formData.konfirmasiPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  variant="primary"
                  fullWidth={false}
                  className="px-6"
                  onClick={handleSave}
                >
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
