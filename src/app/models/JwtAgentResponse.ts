export interface JwtAgentResponse {
    token: string;
    id: number;
    username: string;
    email: string;
    roles: string[];
    nom: string;
    prenom: string;
    address: string;
    dateNaissance: Date;
    idType: string;
    numId: string;
    numMatricule: string;
    numPatente: string;
    phone: string;
    password: string;
  }