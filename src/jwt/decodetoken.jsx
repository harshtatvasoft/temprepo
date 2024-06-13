import { jwtDecode } from 'jwt-decode';

const getRoleFromToken = (token) => {
  try {

    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
 
    return   decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];// Assuming 'role' is the claim you are looking for
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
export default {
    getRoleFromToken
};