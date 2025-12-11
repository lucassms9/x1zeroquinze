export const leagueInfo = {
    name: "X1 Zero Quinze",
    season: "Temporada 2025 - 1ª Edição",
    status: "Em Andamento",
    nextRound: 7,
    totalRounds: 10,
    championPrize: "R$ 15.000,00",
    vicePrize: "R$ 5.000,00",
    topScorerPrize: "R$ 1.000,00"
};

export const athletes = [
    {
        id: 1,
        name: "Carlos da Silva",
        nickname: "Carlinhos Bala",
        team: "Favela Vence",
        position: "Atacante",
        stats: { points: 18, matches: 6, wins: 6, losses: 0, goalsFor: 22, goalsAgainst: 8 },
        photo: null // Placeholder for now
    },
    {
        id: 2,
        name: "Marcos Oliveira",
        nickname: "Marquinhos",
        team: "Os Muleque Liso",
        position: "Meia",
        stats: { points: 15, matches: 6, wins: 5, losses: 1, goalsFor: 19, goalsAgainst: 10 },
        photo: null
    },
    {
        id: 3,
        name: "Felipe Santos",
        nickname: "Felipinho",
        team: "Real Matismo",
        position: "Atacante",
        stats: { points: 12, matches: 6, wins: 4, losses: 2, goalsFor: 15, goalsAgainst: 12 },
        photo: null
    },
    {
        id: 4,
        name: "João Pedro",
        nickname: "JP",
        team: "Bayer de Muleque",
        position: "Goleiro-Linha",
        stats: { points: 9, matches: 6, wins: 3, losses: 3, goalsFor: 12, goalsAgainst: 14 },
        photo: null
    },
    {
        id: 5,
        name: "Rafael Costa",
        nickname: "Rafinha",
        team: "Sem Freio FC",
        position: "Ala",
        stats: { points: 6, matches: 6, wins: 2, losses: 4, goalsFor: 10, goalsAgainst: 18 },
        photo: null
    },
    {
        id: 6,
        name: "André Souza",
        nickname: "Dedé",
        team: "Vila Nova",
        position: "Pivô",
        stats: { points: 3, matches: 6, wins: 1, losses: 5, goalsFor: 8, goalsAgainst: 20 },
        photo: null
    },
    {
        id: 7,
        name: "Bruno Lima",
        nickname: "Bruninho",
        team: "Unidos da Norte",
        position: "Atacante",
        stats: { points: 0, matches: 6, wins: 0, losses: 6, goalsFor: 5, goalsAgainst: 25 },
        photo: null
    }
];

export const matches = [
    {
        id: 101,
        round: 7,
        status: "Agendado",
        date: "14/02/2026 - 19:00",
        player1Id: 1,
        player2Id: 2,
        score1: null,
        score2: null,
        location: "Arena Zero Quinze"
    },
    {
        id: 102,
        round: 7,
        status: "Agendado",
        date: "14/02/2026 - 20:00",
        player1Id: 3,
        player2Id: 4,
        score1: null,
        score2: null,
        location: "Arena Zero Quinze"
    },
    {
        id: 103,
        round: 6,
        status: "Finalizado",
        date: "07/02/2026 - 19:00",
        player1Id: 1,
        player2Id: 3,
        score1: 4,
        score2: 2,
        location: "Arena Zero Quinze"
    },
    {
        id: 104,
        round: 6,
        status: "Finalizado",
        date: "07/02/2026 - 20:00",
        player1Id: 2,
        player2Id: 5,
        score1: 5,
        score2: 1,
        location: "Arena Zero Quinze"
    }
];
