(function() {
    var data = [
      {
        "type": "air",
        "level": "F",
        "hp": 29,
        "speed": 6,
        "range": 1,
        "attack": 39,
        "defense": 45
      },
      {
        "type": "land",
        "level": "C",
        "hp": 88,
        "speed": 28,
        "range": 3,
        "attack": 52,
        "defense": 61
      },
      {
        "type": "fire",
        "level": "D",
        "hp": 60,
        "speed": 27,
        "range": 3,
        "attack": 46,
        "defense": 52
      },
      {
        "type": "air",
        "level": "A",
        "hp": 113,
        "speed": 36,
        "range": 5,
        "attack": 68,
        "defense": 85
      },
      {
        "type": "water",
        "level": "B",
        "hp": 95,
        "speed": 32,
        "range": 4,
        "attack": 63,
        "defense": 71
      },
      {
        "type": "land",
        "level": "A",
        "hp": 124,
        "speed": 34,
        "range": 5,
        "attack": 67,
        "defense": 81
      },
      {
        "type": "water",
        "level": "D",
        "hp": 50,
        "speed": 23,
        "range": 3,
        "attack": 47,
        "defense": 56
      },
      {
        "type": "fire",
        "level": "F",
        "hp": 29,
        "speed": 6,
        "range": 1,
        "attack": 37,
        "defense": 40
      },
      {
        "type": "air",
        "level": "C",
        "hp": 74,
        "speed": 26,
        "range": 3,
        "attack": 51,
        "defense": 58
      },
      {
        "type": "fire",
        "level": "C",
        "hp": 76,
        "speed": 29,
        "range": 3,
        "attack": 56,
        "defense": 66
      },
      {
        "type": "fire",
        "level": "A",
        "hp": 113,
        "speed": 35,
        "range": 4,
        "attack": 63,
        "defense": 89
      },
      {
        "type": "water",
        "level": "A",
        "hp": 117,
        "speed": 36,
        "range": 4,
        "attack": 63,
        "defense": 81
      },
      {
        "type": "air",
        "level": "E",
        "hp": 48,
        "speed": 13,
        "range": 1,
        "attack": 39,
        "defense": 49
      },
      {
        "type": "fire",
        "level": "A",
        "hp": 119,
        "speed": 36,
        "range": 5,
        "attack": 69,
        "defense": 85
      },
      {
        "type": "air",
        "level": "A",
        "hp": 110,
        "speed": 34,
        "range": 5,
        "attack": 65,
        "defense": 85
      },
      {
        "type": "air",
        "level": "A",
        "hp": 114,
        "speed": 34,
        "range": 4,
        "attack": 65,
        "defense": 89
      },
      {
        "type": "air",
        "level": "B",
        "hp": 99,
        "speed": 31,
        "range": 4,
        "attack": 58,
        "defense": 78
      },
      {
        "type": "fire",
        "level": "C",
        "hp": 86,
        "speed": 25,
        "range": 3,
        "attack": 54,
        "defense": 61
      },
      {
        "type": "land",
        "level": "F",
        "hp": 33,
        "speed": 12,
        "range": 2,
        "attack": 32,
        "defense": 44
      },
      {
        "type": "air",
        "level": "C",
        "hp": 88,
        "speed": 27,
        "range": 3,
        "attack": 56,
        "defense": 61
      },
      {
        "type": "fire",
        "level": "B",
        "hp": 105,
        "speed": 30,
        "range": 4,
        "attack": 58,
        "defense": 77
      },
      {
        "type": "fire",
        "level": "C",
        "hp": 75,
        "speed": 28,
        "range": 3,
        "attack": 58,
        "defense": 63
      },
      {
        "type": "land",
        "level": "B",
        "hp": 99,
        "speed": 32,
        "range": 3,
        "attack": 58,
        "defense": 71
      },
      {
        "type": "land",
        "level": "E",
        "hp": 36,
        "speed": 18,
        "range": 2,
        "attack": 38,
        "defense": 46
      },
      {
        "type": "air",
        "level": "F",
        "hp": 22,
        "speed": 6,
        "range": 1,
        "attack": 32,
        "defense": 42
      },
      {
        "type": "land",
        "level": "C",
        "hp": 90,
        "speed": 25,
        "range": 3,
        "attack": 50,
        "defense": 61
      },
      {
        "type": "fire",
        "level": "D",
        "hp": 70,
        "speed": 25,
        "range": 2,
        "attack": 49,
        "defense": 50
      },
      {
        "type": "air",
        "level": "E",
        "hp": 36,
        "speed": 13,
        "range": 1,
        "attack": 40,
        "defense": 48
      },
      {
        "type": "air",
        "level": "D",
        "hp": 67,
        "speed": 20,
        "range": 3,
        "attack": 45,
        "defense": 57
      },
      {
        "type": "air",
        "level": "F",
        "hp": 35,
        "speed": 10,
        "range": 1,
        "attack": 34,
        "defense": 45
      },
      {
        "type": "water",
        "level": "B",
        "hp": 95,
        "speed": 31,
        "range": 3,
        "attack": 61,
        "defense": 76
      },
      {
        "type": "land",
        "level": "B",
        "hp": 111,
        "speed": 33,
        "range": 4,
        "attack": 58,
        "defense": 71
      },
      {
        "type": "fire",
        "level": "D",
        "hp": 62,
        "speed": 27,
        "range": 2,
        "attack": 45,
        "defense": 50
      },
      {
        "type": "fire",
        "level": "E",
        "hp": 44,
        "speed": 15,
        "range": 2,
        "attack": 38,
        "defense": 45
      },
      {
        "type": "land",
        "level": "C",
        "hp": 83,
        "speed": 27,
        "range": 3,
        "attack": 54,
        "defense": 60
      },
      {
        "type": "air",
        "level": "D",
        "hp": 55,
        "speed": 21,
        "range": 2,
        "attack": 49,
        "defense": 54
      },
      {
        "type": "air",
        "level": "C",
        "hp": 77,
        "speed": 28,
        "range": 3,
        "attack": 58,
        "defense": 58
      },
      {
        "type": "land",
        "level": "D",
        "hp": 61,
        "speed": 23,
        "range": 2,
        "attack": 47,
        "defense": 51
      },
      {
        "type": "fire",
        "level": "E",
        "hp": 40,
        "speed": 18,
        "range": 2,
        "attack": 41,
        "defense": 46
      },
      {
        "type": "fire",
        "level": "A",
        "hp": 116,
        "speed": 34,
        "range": 4,
        "attack": 67,
        "defense": 88
      },
      {
        "type": "fire",
        "level": "C",
        "hp": 73,
        "speed": 29,
        "range": 3,
        "attack": 54,
        "defense": 63
      },
      {
        "type": "water",
        "level": "D",
        "hp": 68,
        "speed": 26,
        "range": 3,
        "attack": 47,
        "defense": 58
      },
      {
        "type": "land",
        "level": "E",
        "hp": 43,
        "speed": 14,
        "range": 1,
        "attack": 41,
        "defense": 47
      },
      {
        "type": "fire",
        "level": "F",
        "hp": 34,
        "speed": 5,
        "range": 1,
        "attack": 30,
        "defense": 42
      },
      {
        "type": "air",
        "level": "C",
        "hp": 88,
        "speed": 29,
        "range": 3,
        "attack": 52,
        "defense": 60
      },
      {
        "type": "land",
        "level": "C",
        "hp": 86,
        "speed": 28,
        "range": 3,
        "attack": 57,
        "defense": 62
      },
      {
        "type": "fire",
        "level": "A",
        "hp": 118,
        "speed": 35,
        "range": 5,
        "attack": 64,
        "defense": 86
      },
      {
        "type": "land",
        "level": "D",
        "hp": 61,
        "speed": 21,
        "range": 2,
        "attack": 45,
        "defense": 57
      },
      {
        "type": "land",
        "level": "C",
        "hp": 83,
        "speed": 26,
        "range": 3,
        "attack": 56,
        "defense": 63
      },
      {
        "type": "air",
        "level": "F",
        "hp": 38,
        "speed": 5,
        "range": 1,
        "attack": 37,
        "defense": 42
      },
      {
        "type": "water",
        "level": "F",
        "hp": 21,
        "speed": 12,
        "range": 2,
        "attack": 36,
        "defense": 40
      },
      {
        "type": "land",
        "level": "F",
        "hp": 34,
        "speed": 9,
        "range": 1,
        "attack": 37,
        "defense": 43
      },
      {
        "type": "water",
        "level": "C",
        "hp": 78,
        "speed": 29,
        "range": 3,
        "attack": 53,
        "defense": 66
      },
      {
        "type": "air",
        "level": "A",
        "hp": 123,
        "speed": 34,
        "range": 5,
        "attack": 64,
        "defense": 86
      },
      {
        "type": "fire",
        "level": "F",
        "hp": 23,
        "speed": 9,
        "range": 2,
        "attack": 30,
        "defense": 44
      },
      {
        "type": "air",
        "level": "C",
        "hp": 93,
        "speed": 26,
        "range": 3,
        "attack": 53,
        "defense": 65
      },
      {
        "type": "air",
        "level": "F",
        "hp": 35,
        "speed": 10,
        "range": 1,
        "attack": 35,
        "defense": 42
      },
      {
        "type": "air",
        "level": "A",
        "hp": 119,
        "speed": 34,
        "range": 5,
        "attack": 69,
        "defense": 89
      },
      {
        "type": "water",
        "level": "B",
        "hp": 96,
        "speed": 30,
        "range": 3,
        "attack": 62,
        "defense": 78
      },
      {
        "type": "water",
        "level": "F",
        "hp": 37,
        "speed": 5,
        "range": 2,
        "attack": 33,
        "defense": 41
      },
      {
        "type": "fire",
        "level": "C",
        "hp": 73,
        "speed": 29,
        "range": 3,
        "attack": 53,
        "defense": 62
      },
      {
        "type": "water",
        "level": "B",
        "hp": 94,
        "speed": 30,
        "range": 3,
        "attack": 63,
        "defense": 75
      },
      {
        "type": "land",
        "level": "D",
        "hp": 64,
        "speed": 26,
        "range": 2,
        "attack": 47,
        "defense": 53
      },
      {
        "type": "air",
        "level": "E",
        "hp": 51,
        "speed": 12,
        "range": 2,
        "attack": 40,
        "defense": 50
      },
      {
        "type": "land",
        "level": "D",
        "hp": 70,
        "speed": 23,
        "range": 2,
        "attack": 47,
        "defense": 50
      },
      {
        "type": "water",
        "level": "B",
        "hp": 98,
        "speed": 33,
        "range": 4,
        "attack": 59,
        "defense": 75
      },
      {
        "type": "water",
        "level": "A",
        "hp": 118,
        "speed": 33,
        "range": 4,
        "attack": 63,
        "defense": 89
      },
      {
        "type": "land",
        "level": "E",
        "hp": 53,
        "speed": 17,
        "range": 2,
        "attack": 43,
        "defense": 49
      },
      {
        "type": "fire",
        "level": "B",
        "hp": 109,
        "speed": 33,
        "range": 3,
        "attack": 59,
        "defense": 78
      },
      {
        "type": "water",
        "level": "E",
        "hp": 41,
        "speed": 16,
        "range": 1,
        "attack": 43,
        "defense": 50
      },
      {
        "type": "water",
        "level": "F",
        "hp": 32,
        "speed": 7,
        "range": 1,
        "attack": 39,
        "defense": 40
      },
      {
        "type": "fire",
        "level": "D",
        "hp": 51,
        "speed": 21,
        "range": 2,
        "attack": 46,
        "defense": 56
      },
      {
        "type": "land",
        "level": "E",
        "hp": 44,
        "speed": 16,
        "range": 1,
        "attack": 40,
        "defense": 50
      },
      {
        "type": "fire",
        "level": "B",
        "hp": 104,
        "speed": 33,
        "range": 3,
        "attack": 63,
        "defense": 71
      },
      {
        "type": "fire",
        "level": "A",
        "hp": 120,
        "speed": 35,
        "range": 5,
        "attack": 69,
        "defense": 88
      },
      {
        "type": "land",
        "level": "C",
        "hp": 85,
        "speed": 27,
        "range": 3,
        "attack": 55,
        "defense": 61
      },
      {
        "type": "fire",
        "level": "A",
        "hp": 116,
        "speed": 33,
        "range": 4,
        "attack": 68,
        "defense": 82
      },
      {
        "type": "land",
        "level": "C",
        "hp": 90,
        "speed": 25,
        "range": 3,
        "attack": 55,
        "defense": 58
      },
      {
        "type": "fire",
        "level": "C",
        "hp": 85,
        "speed": 27,
        "range": 3,
        "attack": 53,
        "defense": 59
      },
      {
        "type": "land",
        "level": "F",
        "hp": 33,
        "speed": 11,
        "range": 1,
        "attack": 32,
        "defense": 44
      },
      {
        "type": "fire",
        "level": "C",
        "hp": 77,
        "speed": 27,
        "range": 3,
        "attack": 55,
        "defense": 60
      },
      {
        "type": "fire",
        "level": "B",
        "hp": 104,
        "speed": 33,
        "range": 4,
        "attack": 61,
        "defense": 78
      },
      {
        "type": "fire",
        "level": "C",
        "hp": 71,
        "speed": 27,
        "range": 3,
        "attack": 56,
        "defense": 66
      },
      {
        "type": "air",
        "level": "C",
        "hp": 92,
        "speed": 27,
        "range": 3,
        "attack": 52,
        "defense": 58
      },
      {
        "type": "air",
        "level": "A",
        "hp": 124,
        "speed": 36,
        "range": 4,
        "attack": 66,
        "defense": 87
      },
      {
        "type": "air",
        "level": "F",
        "hp": 32,
        "speed": 13,
        "range": 1,
        "attack": 39,
        "defense": 41
      },
      {
        "type": "land",
        "level": "C",
        "hp": 82,
        "speed": 28,
        "range": 3,
        "attack": 53,
        "defense": 62
      },
      {
        "type": "land",
        "level": "E",
        "hp": 52,
        "speed": 16,
        "range": 2,
        "attack": 39,
        "defense": 49
      },
      {
        "type": "air",
        "level": "C",
        "hp": 93,
        "speed": 29,
        "range": 3,
        "attack": 59,
        "defense": 60
      },
      {
        "type": "water",
        "level": "E",
        "hp": 42,
        "speed": 13,
        "range": 1,
        "attack": 43,
        "defense": 45
      },
      {
        "type": "fire",
        "level": "E",
        "hp": 54,
        "speed": 12,
        "range": 2,
        "attack": 43,
        "defense": 48
      },
      {
        "type": "water",
        "level": "B",
        "hp": 100,
        "speed": 31,
        "range": 3,
        "attack": 60,
        "defense": 79
      },
      {
        "type": "land",
        "level": "B",
        "hp": 113,
        "speed": 30,
        "range": 4,
        "attack": 61,
        "defense": 72
      },
      {
        "type": "water",
        "level": "A",
        "hp": 117,
        "speed": 35,
        "range": 4,
        "attack": 63,
        "defense": 87
      },
      {
        "type": "fire",
        "level": "A",
        "hp": 117,
        "speed": 35,
        "range": 5,
        "attack": 64,
        "defense": 83
      },
      {
        "type": "land",
        "level": "E",
        "hp": 53,
        "speed": 14,
        "range": 2,
        "attack": 45,
        "defense": 46
      },
      {
        "type": "water",
        "level": "B",
        "hp": 102,
        "speed": 31,
        "range": 4,
        "attack": 60,
        "defense": 72
      },
      {
        "type": "water",
        "level": "C",
        "hp": 92,
        "speed": 29,
        "range": 3,
        "attack": 57,
        "defense": 66
      },
      {
        "type": "land",
        "level": "E",
        "hp": 37,
        "speed": 12,
        "range": 1,
        "attack": 46,
        "defense": 50
      },
      {
        "type": "air",
        "level": "E",
        "hp": 42,
        "speed": 18,
        "range": 1,
        "attack": 42,
        "defense": 50
      }
    ];

    window.data = data;
})();
