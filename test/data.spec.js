import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {searchCharacter, filterAlfa, filterFilms, filters} from '../src/data.js';

const objFilms = [
  {
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93",
  },

  {
    "title": "Kiki's Delivery Service",
    "release_date": "1989",
    "rt_score": "96",
  },

  {
    "title": "Tales from Earthsea",
    "release_date": "2006",
    "rt_score": "41",
  }
]

const objChacact = [
  {
    "name": "Taeko Okajima",
  },

  {
    "name": "Mr. Okajima",
  },

  {
    "name": "Grandmother Okajima",
  }
]

describe('test searchCharacter', () =>{
  it('is a function', () =>{
    expect(typeof searchCharacter).toBe('function')
  })

  it('returns searchCharacter', () => {
    expect(searchCharacter(objChacact, "Taeko Okajima")).toEqual([
      {
        "name": "Taeko Okajima",
      }
    ]);
  });
});

describe('test filteAz', () =>{
  it('is a function', () =>{
    expect(typeof filterAlfa).toBe('function')
  })

  it('returns filterAz', () => {
    expect(filterAlfa(objChacact,"a-z")).toEqual([
      {
        "name": "Grandmother Okajima",
      },

      {
        "name": "Mr. Okajima",
      },

      {"name": "Taeko Okajima",
      }
    ]);
  });
});

describe('test filterZa', () =>{
  it('is a function', () =>{
    expect(typeof filterAlfa).toBe('function')
  })

  it('returns filterZa', () => {
    expect(filterAlfa(objChacact,"z-a")).toEqual([
      {
        "name": "Taeko Okajima",
      },

      {
        "name": "Mr. Okajima",
      },

      {
        "name": "Grandmother Okajima",
      }
    ]);
  });
});

describe('test filterFilms', () => {
  it('is a function', () => {
    expect(typeof filterFilms).toBe('function');
  });

  it('return search films', () => {
    expect(filterFilms(objFilms,"Tales from Earthsea")).toEqual([{
      "title": "Tales from Earthsea",
      "release_date": "2006",
      "rt_score": "41",
    }]);
  });
});

describe('test filteAz', () =>{
  it('is a function', () =>{
    expect(typeof filterAlfa).toBe('function')
  })

describe('test orderAToZ', () => {
  it('is a function', () => {
    expect(typeof filters).toBe('function');
  });

  it('returns order a-z', () => {
    expect(filters(objFilms, "a-z")).toEqual([{
      "title": "Kiki's Delivery Service",
      "release_date": "1989",
      "rt_score": "96",
    },
    {
      "title": "My Neighbor Totoro",
      "release_date": "1988",
      "rt_score": "93",
    },
    {
      "title": "Tales from Earthsea",
      "release_date": "2006",
      "rt_score": "41",
    }]);
  });
});

describe('test orderZToA', () => {
  it('is a function', () => {
    expect(typeof filters).toBe('function');
  });

  it('returns order z-a', () => {
    expect(filters(objFilms, "z-a")).toEqual([{
      "title": "Tales from Earthsea",
      "release_date": "2006",
      "rt_score": "41",
    },
    {
      "title": "My Neighbor Totoro",
      "release_date": "1988",
      "rt_score": "93",
    },
    {
      "title": "Kiki's Delivery Service",
      "release_date": "1989",
      "rt_score": "96",
    }
  ]);
  });
});

describe('test orderOldest', () =>{
  it('is a function', () =>{
    expect(typeof filters).toBe('function')
  })

  it('returns order oldest', () =>{
    expect(filters(objFilms, "oldest")).toEqual([
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      },
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96",
      },
      {
        "title": "Tales from Earthsea",
        "release_date": "2006",
        "rt_score": "41",
      },
    ])
  })
})

describe('test orderNewest', () =>{
  it('is a function', () =>{
    expect(typeof filters).toBe('function')
  })

  it('returns order newest', () =>{
    expect(filters(objFilms, "newest")).toEqual([
      {
        "title": "Tales from Earthsea",
        "release_date": "2006",
        "rt_score": "41",
      },
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      }
    ])
  })
})

describe('test orderLower', () =>{
  it('is a function', () =>{
    expect(typeof filters).toBe('function')
  })

  it('resturns order lower', () =>{
    expect(filters(objFilms, "lower")).toEqual([
      {
        "title": "Tales from Earthsea",
        "release_date": "2006",
        "rt_score": "41",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      },
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96",
      }
    ])
  })
})

describe('test orderHigher', () =>{
  it('is a function', () =>{
    expect(typeof filters).toBe('function')
  })

  it('returns order higher', () => {
    expect(filters(objFilms, "higher")).toEqual([
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      },
      {
        "title": "Tales from Earthsea",
        "release_date": "2006",
        "rt_score": "41",
      }
    ])
  })
})})
