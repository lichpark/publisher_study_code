//const cgv_bupung =[];

const movie = {
  age_limited: 15,
  name: "롱레그스",
  is_showing: true,
  genre: ["호러", "스릴러"],
  runningtime: "101분",
  release_date: "2024.10.30",
  theather: [
    {
      movie_type: "2D",
      theatorNumber: "6",
      theatorFloor: 6,
      availableSeat: 92,
      showTimes: [{ startTime: "19:50", reaminSeat: 91 }],
    },
    {
      movie_type: "2D",
      theatorNumber: "8",
      theatorFloor: 6,
      availableSeat: 142,
      showTimes: [{ startTime: "22:10", reaminSeat: 142 }],
    },
  ],
};

//console.log(movie);

const tway_schedule = {
  date: {
    month: 11,
    day: 1,
    schedule: [
      {
        code: "TW211",
        airplane: "B737-800",
        flightType: "direct",
        durection: 140,
        departures_time: "8:35",
        arrival_time: "10:55",
        departures: ["서울/인천"],
        arrival: ["도쿄/나리타"],
        seat_cource: {
          event_price: {
            seat_type: "economy",
            budget_limit: 10,
            free_budget: 0,
            avable_seat: 0,
            price: 120000,
            business_saver: 2,
            benefit: false,
          },
          smart_price: {
            seat_type: "economy",
            budget_limit: 10,
            free_budget: 15,
            avable_seat: 4,
            price: 161000,
            business_saver: 2,
            benefit: false,
          },
          normal_price: {
            seat_type: "economy",
            budget_limit: 10,
            free_budget: 20,
            avable_seat: 9,
            price: 371000,
            business_saver: 2,
            benefit: false,
          },
          business_price: {
            seat_type: "business_flat",
            budget_limit: 10,
            free_budget: 40,
            avable_seat: 1,
            price: 700000,
            business_saver: 2,
            benefit: true,
          },
        },
      },
    ],
  },
};

console.log(tway_schedule);
const data = {
  airplane_name: "TW211",
  airplane_model: "B737-800",
  departure: {
    time: "08:35",
    airport: "ICN",
  },
  arrival: {
    time: "10:55",
    airport: "NRT",
  },
  flight_time: 150,
  flight_method: "direct",
  flight_list: [
    {
      freight_type: "이벤트 운임",
      freight_info: {
        seat_grad: "이코노미",
        carryOn_baggage: "10Kg",
        free_baggage: "없음",
      },
      freght_price: {
        price_unit: "KRW",
        price: 140000,
        available_seat: 0,
      },
    },
    {
      freight_type: "스마트 운임",
      freight_info: {
        seat_grad: "이코노미",
        carryOn_baggage: "10Kg",
        free_baggage: "15kg",
      },
      freght_price: {
        price_unit: "KRW",
        price: 161000,
        available_seat: 4,
      },
    },
    {
      freight_type: "일반 운임",
      freight_info: {
        seat_grad: "이코노미",
        carryOn_baggage: "10Kg",
        free_baggage: "20kg",
      },
      freght_price: {
        price_unit: "KRW",
        price: 371000,
        available_seat: 9,
      },
    },
  ],
};
