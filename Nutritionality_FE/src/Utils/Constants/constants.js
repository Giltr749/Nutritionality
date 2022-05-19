import axios from 'axios';

// WORDING:
export const COMPANY_NAME = 'Nutritionality';
export const SUCCESSFUL_SIGN_UP_MESSAGE = "Successfully Signed Up!";
export const USER_NAME_WORDING = 'Username';
export const EMAIL_WORDING = 'Email';
export const PASSWORD_WORDING = "Password";
export const OLD_PASSWORD_WORDING = "Old Password";
export const NEW_PASSWORD_WORDING = "New Password";
export const CONFIRM_NEW_PASSWORD_WORDING = "Confirm New Password";
export const CONFIRM_PASSWORD_WORDING = 'Confirm Password';
export const SIGN_UP_WORDING = "Sign up";
export const LOG_IN_WORDING = "Log in";
export const UPDATE_WORDING = 'Update';
export const DISH_FORM_WORDING = "Dish Form";
export const ADD_DISH_WORDING = "Add Dish";
export const UPDATE_DISH_WORDING = "Update Dish";
export const SEARCH_BUTTON_WORDING = "Search";
export const DISH_NAME_WORDING = "Dish Name";
export const SIGN_UP = SIGN_UP_WORDING.toLowerCase();
export const LOG_IN = LOG_IN_WORDING.toLowerCase();
export const LOG_OUT = "log out";
export const BUTTON_WORDING = "button";
export const PROTEIN_WORDING = "Protein";
export const TOTAL_FAT_WORDING = "Total Fat";
export const CHOLESTEROL_WORDING = "Cholesterol";
export const SODIUM_WORDING = "Sodium";
export const CARBOHYDRATES_WORDING = "Carbohydrates";
export const CALORIES_WORDING = "Calories";
export const UPDATE_SUCCESS_MESSAGE = "Update Successful!";
export const SIGNUP_AUTH_PROMPT = "Already have an account?";
export const LOGIN_AUTH_PROMPT = "Need an account? ";
export const ADD_DISH = "Add Dish";
export const DISHES_WORDING = "Dishes";
export const UPDATE_PASSWORD_WORDING = "Update Password";
export const PERSONAL_DETAILS_WORDING = "Personal Details";
export const UPDATE_USER_DETAILS_WORDING = "Update User Details";
export const SEARCH_FORM_WORDING = "Find a Restaurant";

// STYLES:
export const ENABLED_BUTTON_STYLE = 'general-button';
export const DISABLED_BUTTON_STYLE = 'general-button-disabled';
export const NUTRITIONALITY_TITLE_STYLES = 'nutritionality-title';
export const NAV_BAR_TAB_STYLES = ['navbar-container', 'navbar-tab'];
export const USER_GREETING_STYLES = ['user-greeting'];

//Navigation Name Arrays:
export const NAV_BAR_TAB_NAMES = ['home', 'search'];
export const AUTH_BAR_NAMES = ['sign up', 'log in'];
export const ADMIN_BAR_NAMES = ['dashboard'];
export const SETTINGS_BAR_NAMES = ['profile', 'log out'];

//ERROR HANDLING:
export const UPDATE_FAILED_ERROR = "Updated failed";
export const PASSWORD_MATCH_ERROR_MESSAGE = "New and Confirm Password fields must match!";
export const FIELD_LENGTH_ERROR_MESSAGE = "Length of field is too long";
export const DATA_VALIDATION_ERROR = "One or more fields are incorrect or missing";

//TABS:
export const HOME = '/';
export const PROFILE = '/profile';
export const SEARCH = '/search';
export const DASHBOARD = '/dashboard';
export const MY_MENU = '/mymenu';

//API & PRIMARY ROUTES:
export const API = axios.create({ baseURL: "http://localhost:8080", withCredentials: true });
export const AUTH_ROUTE = '/auth';
export const USER_ROUTE = '/user';
export const RESTAURANT_ROUTE = '/restaurant';

//STATUS CODES:
export const STATUS_OK = 200;

//NUMBERS:
export const DEBOUNCE_TIMER = 500;