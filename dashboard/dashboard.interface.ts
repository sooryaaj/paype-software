import { Role } from "src/dashboard/enum/Role.enum";

export interface Dashboard{

    Type: Role;

    Name: String;

    email: String;

    empId: string;

    Department: String;

    PhoneNumber: Number;

    PAN: String;

    IFSC_Code: String;

    account_Number: number;

    beneficiary_Name: String;

    privileges: string;

    lastLogin: Date;



    

}

// import { Role } from "src/modules/enum/Role.enum";

// export interface Dashboard {
//   Type: Role;
//   Name: string;
//   email: string;
//   empId: string;
//   Department: string;
//   PhoneNumber: number;
//   PAN: string;
//   IFSC_Code: string;
//   account_Number: number;
//   beneficiary_Name: string;
//   privileges: string;
//   lastLogin: Date;
// }

// export interface DashboardDTO extends Omit<Dashboard, "PhoneNumber" | "account_Number" | "lastLogin"> {
//   PhoneNumber: string;
//   account_Number: string;
//   lastLogin: string;
// }

// export const validateDashboardDTO = (dashboardDTO: DashboardDTO): string[] => {
//   const errors: string[] = [];

//   // Type validation
//   if (!Object.values(Role).includes(dashboardDTO.Type)) {
//     errors.push("Invalid Type");
//   }

//   // Name validation
//   if (!dashboardDTO.Name || dashboardDTO.Name.trim().length === 0) {
//     errors.push("Name is required");
//   }

//   // Email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!dashboardDTO.email || !emailRegex.test(dashboardDTO.email)) {
//     errors.push("Invalid email");
//   }

//   // Employee ID validation
//   if (!dashboardDTO.empId || dashboardDTO.empId.trim().length === 0) {
//     errors.push("Employee ID is required");
//   }

//   // Department validation
//   if (!dashboardDTO.Department || dashboardDTO.Department.trim().length === 0) {
//     errors.push("Department is required");
//   }

//   // Phone number validation
//   const phoneRegex = /^\d{10}$/;
//   if (!dashboardDTO.PhoneNumber || !phoneRegex.test(dashboardDTO.PhoneNumber)) {
//     errors.push("Invalid phone number");
//   }

//   // PAN validation
//   const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
//   if (!dashboardDTO.PAN || !panRegex.test(dashboardDTO.PAN)) {
//     errors.push("Invalid PAN");
//   }

//   // IFSC code validation
//   const ifscRegex = /^[A-Z]{4}\d{7}$/;
//   if (!dashboardDTO.IFSC_Code || !ifscRegex.test(dashboardDTO.IFSC_Code)) {
//     errors.push("Invalid IFSC code");
//   }

//   // Account number validation
//   const accountRegex = /^\d{9,18}$/;
//   if (!dashboardDTO.account_Number || !accountRegex.test(dashboardDTO.account_Number)) {
//     errors.push("Invalid account number");
//   }

//   // Beneficiary name validation
//   if (!dashboardDTO.beneficiary_Name || dashboardDTO.beneficiary_Name.trim().length === 0) {
//     errors.push("Beneficiary name is required");
//   }

//   // Privileges validation
//   if (!dashboardDTO.privileges || dashboardDTO.privileges.trim().length === 0) {
//     errors.push("Privileges are required");
//   }

//   // Last login validation
//   if (!dashboardDTO.lastLogin || isNaN(Date.parse(dashboardDTO.lastLogin))) {
//     errors.push("Invalid last login date");
//   }

//   return errors;
// };
