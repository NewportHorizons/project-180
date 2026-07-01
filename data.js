const WORKOUTS = [
  {
    "id": "W1D1",
    "week": 1,
    "day": "Monday",
    "dayNum": 1,
    "title": "Push + Abs",
    "subtitle": "Upper chest, shoulders, triceps, core",
    "type": "POWER",
    "duration": "45-55 min",
    "phase": "Base",
    "progression": "40 sec work / controlled pace / learn flow",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Band Pull Apart x15",
      "Push-up to Pike x6"
    ],
    "block1": [
      "DB Flat Bench Press x10",
      "Incline Walk 90 sec @ 10-12%",
      "Standing DB Shoulder Press x10",
      "Run 60 sec @ Zone 3/4"
    ],
    "block2": [
      "Incline DB Bench x12",
      "Renegade Row x10 total",
      "Med Ball Slam x15",
      "Sprint 45 sec + Walk 45 sec"
    ],
    "core": [
      "Plank 45 sec",
      "Dead Bug x15/side",
      "Russian Twist x20 total",
      "Suitcase Carry 60 sec/side"
    ],
    "targets": {
      "DB Flat Bench Press": "60 lb",
      "Incline DB Bench": "50 lb",
      "DB Shoulder Press": "35 lb",
      "Renegade Row": "35 lb"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W1D2",
    "week": 1,
    "day": "Tuesday",
    "dayNum": 2,
    "title": "Pull + Core",
    "subtitle": "Back width, rear delts, biceps, anti-rotation core",
    "type": "RESISTANCE",
    "duration": "45-55 min",
    "phase": "Base",
    "progression": "40 sec work / controlled pace / learn flow",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Band Row x15",
      "Scap Push-up x10"
    ],
    "block1": [
      "Single Arm DB Row x10/side",
      "Incline Walk 90 sec @ 8-12%",
      "Band Lat Pulldown x15",
      "Run 60 sec @ Zone 3"
    ],
    "block2": [
      "Hammer Curl x12",
      "Rear Delt Fly x12",
      "Farmer Carry 60 sec",
      "Mountain Climber 30 sec"
    ],
    "core": [
      "Stability Ball Rollout x12-15",
      "Side Plank 45 sec/side",
      "Reverse Crunch x20",
      "Pallof Press x12/side"
    ],
    "targets": {
      "Single Arm DB Row": "70 lb",
      "Hammer Curl": "30 lb",
      "Rear Delt Fly": "20 lb",
      "Farmer Carry": "70 lb each"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W1D3",
    "week": 1,
    "day": "Wednesday",
    "dayNum": 3,
    "title": "Conditioning",
    "subtitle": "Full-body conditioning with treadmill intervals",
    "type": "SWITCH",
    "duration": "45-55 min",
    "phase": "Base",
    "progression": "40 sec work / controlled pace / learn flow",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Goblet Squat x10",
      "High Knees x20"
    ],
    "block1": [
      "KB Swing x20",
      "Goblet Squat x15",
      "Push-up x15",
      "Incline Walk 90 sec"
    ],
    "block2": [
      "Treadmill Sprint 30 sec",
      "Walk Recovery 60 sec",
      "Med Ball Slam x15",
      "Half Ball Mountain Climber x30 sec"
    ],
    "core": [
      "Half Ball Plank 45 sec",
      "Toe Touch x20",
      "Medicine Ball Russian Twist x20",
      "Hollow Hold 30 sec"
    ],
    "targets": {
      "KB Swing": "53 lb",
      "Goblet Squat": "60 lb",
      "Push-up": "Bodyweight",
      "Med Ball Slam": "Weighted Ball"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W1D4",
    "week": 1,
    "day": "Thursday",
    "dayNum": 4,
    "title": "Upper Strength",
    "subtitle": "Heavy upper body strength + abs",
    "type": "RESISTANCE",
    "duration": "45-55 min",
    "phase": "Base",
    "progression": "40 sec work / controlled pace / learn flow",
    "warmup": [
      "Treadmill 6:00 build Zone 1 to Zone 3",
      "Band Pull Apart x20",
      "External Rotation x12/side",
      "Light DB Press x12"
    ],
    "block1": [
      "Heavy DB Bench 4 x 8",
      "Heavy One Arm Row 4 x 8/side",
      "Incline Walk 60 sec between rounds"
    ],
    "block2": [
      "Incline Fly x12",
      "Lateral Raise x15",
      "Alternating Curl x12",
      "Overhead Triceps Extension x12"
    ],
    "core": [
      "Pallof Press x12/side",
      "Plank 60 sec",
      "Dead Bug x15/side",
      "Suitcase Carry 60 sec/side"
    ],
    "targets": {
      "Heavy DB Bench": "65 lb",
      "Heavy One Arm Row": "75 lb",
      "Lateral Raise": "20 lb",
      "Overhead Triceps": "40 lb"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W1D5",
    "week": 1,
    "day": "Friday",
    "dayNum": 5,
    "title": "Athletic HIIT",
    "subtitle": "Explosive full-body HIIT + core finisher",
    "type": "POWER",
    "duration": "45-55 min",
    "phase": "Base",
    "progression": "40 sec work / controlled pace / learn flow",
    "warmup": [
      "Treadmill 6:00 build",
      "World's Greatest Stretch x3/side",
      "Butt Kick x20",
      "Plank Shoulder Tap x20"
    ],
    "block1": [
      "DB Thruster x12",
      "Renegade Row x10 total",
      "Burpee x10",
      "Run 60 sec"
    ],
    "block2": [
      "KB Swing x20",
      "DB Reverse Lunge x8/side",
      "Med Ball Slam x15",
      "Sprint 30 sec + Walk 60 sec"
    ],
    "core": [
      "Hollow Hold 30 sec",
      "Leg Raise x15",
      "Russian Twist x20",
      "Plank 60 sec"
    ],
    "targets": {
      "DB Thruster": "30 lb each",
      "Renegade Row": "35 lb",
      "KB Swing": "53 lb",
      "DB Reverse Lunge": "35 lb each"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W2D1",
    "week": 2,
    "day": "Monday",
    "dayNum": 1,
    "title": "Push + Abs",
    "subtitle": "Upper chest, shoulders, triceps, core",
    "type": "POWER",
    "duration": "45-55 min",
    "phase": "Build",
    "progression": "45 sec work or +1-2 reps per set",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Band Pull Apart x15",
      "Push-up to Pike x6"
    ],
    "block1": [
      "DB Flat Bench Press x10",
      "Incline Walk 90 sec @ 10-12%",
      "Standing DB Shoulder Press x10",
      "Run 60 sec @ Zone 3/4"
    ],
    "block2": [
      "Incline DB Bench x12",
      "Renegade Row x10 total",
      "Med Ball Slam x15",
      "Sprint 45 sec + Walk 45 sec"
    ],
    "core": [
      "Plank 45 sec",
      "Dead Bug x15/side",
      "Russian Twist x20 total",
      "Suitcase Carry 60 sec/side"
    ],
    "targets": {
      "DB Flat Bench Press": "60 lb",
      "Incline DB Bench": "50 lb",
      "DB Shoulder Press": "35 lb",
      "Renegade Row": "35 lb"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W2D2",
    "week": 2,
    "day": "Tuesday",
    "dayNum": 2,
    "title": "Pull + Core",
    "subtitle": "Back width, rear delts, biceps, anti-rotation core",
    "type": "RESISTANCE",
    "duration": "45-55 min",
    "phase": "Build",
    "progression": "45 sec work or +1-2 reps per set",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Band Row x15",
      "Scap Push-up x10"
    ],
    "block1": [
      "Single Arm DB Row x10/side",
      "Incline Walk 90 sec @ 8-12%",
      "Band Lat Pulldown x15",
      "Run 60 sec @ Zone 3"
    ],
    "block2": [
      "Hammer Curl x12",
      "Rear Delt Fly x12",
      "Farmer Carry 60 sec",
      "Mountain Climber 30 sec"
    ],
    "core": [
      "Stability Ball Rollout x12-15",
      "Side Plank 45 sec/side",
      "Reverse Crunch x20",
      "Pallof Press x12/side"
    ],
    "targets": {
      "Single Arm DB Row": "70 lb",
      "Hammer Curl": "30 lb",
      "Rear Delt Fly": "20 lb",
      "Farmer Carry": "70 lb each"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W2D3",
    "week": 2,
    "day": "Wednesday",
    "dayNum": 3,
    "title": "Conditioning",
    "subtitle": "Full-body conditioning with treadmill intervals",
    "type": "SWITCH",
    "duration": "45-55 min",
    "phase": "Build",
    "progression": "45 sec work or +1-2 reps per set",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Goblet Squat x10",
      "High Knees x20"
    ],
    "block1": [
      "KB Swing x20",
      "Goblet Squat x15",
      "Push-up x15",
      "Incline Walk 90 sec"
    ],
    "block2": [
      "Treadmill Sprint 30 sec",
      "Walk Recovery 60 sec",
      "Med Ball Slam x15",
      "Half Ball Mountain Climber x30 sec"
    ],
    "core": [
      "Half Ball Plank 45 sec",
      "Toe Touch x20",
      "Medicine Ball Russian Twist x20",
      "Hollow Hold 30 sec"
    ],
    "targets": {
      "KB Swing": "53 lb",
      "Goblet Squat": "60 lb",
      "Push-up": "Bodyweight",
      "Med Ball Slam": "Weighted Ball"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W2D4",
    "week": 2,
    "day": "Thursday",
    "dayNum": 4,
    "title": "Upper Strength",
    "subtitle": "Heavy upper body strength + abs",
    "type": "RESISTANCE",
    "duration": "45-55 min",
    "phase": "Build",
    "progression": "45 sec work or +1-2 reps per set",
    "warmup": [
      "Treadmill 6:00 build Zone 1 to Zone 3",
      "Band Pull Apart x20",
      "External Rotation x12/side",
      "Light DB Press x12"
    ],
    "block1": [
      "Heavy DB Bench 4 x 8",
      "Heavy One Arm Row 4 x 8/side",
      "Incline Walk 60 sec between rounds"
    ],
    "block2": [
      "Incline Fly x12",
      "Lateral Raise x15",
      "Alternating Curl x12",
      "Overhead Triceps Extension x12"
    ],
    "core": [
      "Pallof Press x12/side",
      "Plank 60 sec",
      "Dead Bug x15/side",
      "Suitcase Carry 60 sec/side"
    ],
    "targets": {
      "Heavy DB Bench": "65 lb",
      "Heavy One Arm Row": "75 lb",
      "Lateral Raise": "20 lb",
      "Overhead Triceps": "40 lb"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W2D5",
    "week": 2,
    "day": "Friday",
    "dayNum": 5,
    "title": "Athletic HIIT",
    "subtitle": "Explosive full-body HIIT + core finisher",
    "type": "POWER",
    "duration": "45-55 min",
    "phase": "Build",
    "progression": "45 sec work or +1-2 reps per set",
    "warmup": [
      "Treadmill 6:00 build",
      "World's Greatest Stretch x3/side",
      "Butt Kick x20",
      "Plank Shoulder Tap x20"
    ],
    "block1": [
      "DB Thruster x12",
      "Renegade Row x10 total",
      "Burpee x10",
      "Run 60 sec"
    ],
    "block2": [
      "KB Swing x20",
      "DB Reverse Lunge x8/side",
      "Med Ball Slam x15",
      "Sprint 30 sec + Walk 60 sec"
    ],
    "core": [
      "Hollow Hold 30 sec",
      "Leg Raise x15",
      "Russian Twist x20",
      "Plank 60 sec"
    ],
    "targets": {
      "DB Thruster": "30 lb each",
      "Renegade Row": "35 lb",
      "KB Swing": "53 lb",
      "DB Reverse Lunge": "35 lb each"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W3D1",
    "week": 3,
    "day": "Monday",
    "dayNum": 1,
    "title": "Push + Abs",
    "subtitle": "Upper chest, shoulders, triceps, core",
    "type": "POWER",
    "duration": "45-55 min",
    "phase": "Push",
    "progression": "50 sec work or +5 lb on main lifts",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Band Pull Apart x15",
      "Push-up to Pike x6"
    ],
    "block1": [
      "DB Flat Bench Press x10",
      "Incline Walk 90 sec @ 10-12%",
      "Standing DB Shoulder Press x10",
      "Run 60 sec @ Zone 3/4"
    ],
    "block2": [
      "Incline DB Bench x12",
      "Renegade Row x10 total",
      "Med Ball Slam x15",
      "Sprint 45 sec + Walk 45 sec"
    ],
    "core": [
      "Plank 45 sec",
      "Dead Bug x15/side",
      "Russian Twist x20 total",
      "Suitcase Carry 60 sec/side"
    ],
    "targets": {
      "DB Flat Bench Press": "60 lb",
      "Incline DB Bench": "50 lb",
      "DB Shoulder Press": "35 lb",
      "Renegade Row": "35 lb"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W3D2",
    "week": 3,
    "day": "Tuesday",
    "dayNum": 2,
    "title": "Pull + Core",
    "subtitle": "Back width, rear delts, biceps, anti-rotation core",
    "type": "RESISTANCE",
    "duration": "45-55 min",
    "phase": "Push",
    "progression": "50 sec work or +5 lb on main lifts",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Band Row x15",
      "Scap Push-up x10"
    ],
    "block1": [
      "Single Arm DB Row x10/side",
      "Incline Walk 90 sec @ 8-12%",
      "Band Lat Pulldown x15",
      "Run 60 sec @ Zone 3"
    ],
    "block2": [
      "Hammer Curl x12",
      "Rear Delt Fly x12",
      "Farmer Carry 60 sec",
      "Mountain Climber 30 sec"
    ],
    "core": [
      "Stability Ball Rollout x12-15",
      "Side Plank 45 sec/side",
      "Reverse Crunch x20",
      "Pallof Press x12/side"
    ],
    "targets": {
      "Single Arm DB Row": "70 lb",
      "Hammer Curl": "30 lb",
      "Rear Delt Fly": "20 lb",
      "Farmer Carry": "70 lb each"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W3D3",
    "week": 3,
    "day": "Wednesday",
    "dayNum": 3,
    "title": "Conditioning",
    "subtitle": "Full-body conditioning with treadmill intervals",
    "type": "SWITCH",
    "duration": "45-55 min",
    "phase": "Push",
    "progression": "50 sec work or +5 lb on main lifts",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Goblet Squat x10",
      "High Knees x20"
    ],
    "block1": [
      "KB Swing x20",
      "Goblet Squat x15",
      "Push-up x15",
      "Incline Walk 90 sec"
    ],
    "block2": [
      "Treadmill Sprint 30 sec",
      "Walk Recovery 60 sec",
      "Med Ball Slam x15",
      "Half Ball Mountain Climber x30 sec"
    ],
    "core": [
      "Half Ball Plank 45 sec",
      "Toe Touch x20",
      "Medicine Ball Russian Twist x20",
      "Hollow Hold 30 sec"
    ],
    "targets": {
      "KB Swing": "53 lb",
      "Goblet Squat": "60 lb",
      "Push-up": "Bodyweight",
      "Med Ball Slam": "Weighted Ball"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W3D4",
    "week": 3,
    "day": "Thursday",
    "dayNum": 4,
    "title": "Upper Strength",
    "subtitle": "Heavy upper body strength + abs",
    "type": "RESISTANCE",
    "duration": "45-55 min",
    "phase": "Push",
    "progression": "50 sec work or +5 lb on main lifts",
    "warmup": [
      "Treadmill 6:00 build Zone 1 to Zone 3",
      "Band Pull Apart x20",
      "External Rotation x12/side",
      "Light DB Press x12"
    ],
    "block1": [
      "Heavy DB Bench 4 x 8",
      "Heavy One Arm Row 4 x 8/side",
      "Incline Walk 60 sec between rounds"
    ],
    "block2": [
      "Incline Fly x12",
      "Lateral Raise x15",
      "Alternating Curl x12",
      "Overhead Triceps Extension x12"
    ],
    "core": [
      "Pallof Press x12/side",
      "Plank 60 sec",
      "Dead Bug x15/side",
      "Suitcase Carry 60 sec/side"
    ],
    "targets": {
      "Heavy DB Bench": "65 lb",
      "Heavy One Arm Row": "75 lb",
      "Lateral Raise": "20 lb",
      "Overhead Triceps": "40 lb"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W3D5",
    "week": 3,
    "day": "Friday",
    "dayNum": 5,
    "title": "Athletic HIIT",
    "subtitle": "Explosive full-body HIIT + core finisher",
    "type": "POWER",
    "duration": "45-55 min",
    "phase": "Push",
    "progression": "50 sec work or +5 lb on main lifts",
    "warmup": [
      "Treadmill 6:00 build",
      "World's Greatest Stretch x3/side",
      "Butt Kick x20",
      "Plank Shoulder Tap x20"
    ],
    "block1": [
      "DB Thruster x12",
      "Renegade Row x10 total",
      "Burpee x10",
      "Run 60 sec"
    ],
    "block2": [
      "KB Swing x20",
      "DB Reverse Lunge x8/side",
      "Med Ball Slam x15",
      "Sprint 30 sec + Walk 60 sec"
    ],
    "core": [
      "Hollow Hold 30 sec",
      "Leg Raise x15",
      "Russian Twist x20",
      "Plank 60 sec"
    ],
    "targets": {
      "DB Thruster": "30 lb each",
      "Renegade Row": "35 lb",
      "KB Swing": "53 lb",
      "DB Reverse Lunge": "35 lb each"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W4D1",
    "week": 4,
    "day": "Monday",
    "dayNum": 1,
    "title": "Push + Abs",
    "subtitle": "Upper chest, shoulders, triceps, core",
    "type": "POWER",
    "duration": "45-55 min",
    "phase": "Test",
    "progression": "Keep quality high; beat Week 1 reps or weight",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Band Pull Apart x15",
      "Push-up to Pike x6"
    ],
    "block1": [
      "DB Flat Bench Press x10",
      "Incline Walk 90 sec @ 10-12%",
      "Standing DB Shoulder Press x10",
      "Run 60 sec @ Zone 3/4"
    ],
    "block2": [
      "Incline DB Bench x12",
      "Renegade Row x10 total",
      "Med Ball Slam x15",
      "Sprint 45 sec + Walk 45 sec"
    ],
    "core": [
      "Plank 45 sec",
      "Dead Bug x15/side",
      "Russian Twist x20 total",
      "Suitcase Carry 60 sec/side"
    ],
    "targets": {
      "DB Flat Bench Press": "60 lb",
      "Incline DB Bench": "50 lb",
      "DB Shoulder Press": "35 lb",
      "Renegade Row": "35 lb"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W4D2",
    "week": 4,
    "day": "Tuesday",
    "dayNum": 2,
    "title": "Pull + Core",
    "subtitle": "Back width, rear delts, biceps, anti-rotation core",
    "type": "RESISTANCE",
    "duration": "45-55 min",
    "phase": "Test",
    "progression": "Keep quality high; beat Week 1 reps or weight",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Band Row x15",
      "Scap Push-up x10"
    ],
    "block1": [
      "Single Arm DB Row x10/side",
      "Incline Walk 90 sec @ 8-12%",
      "Band Lat Pulldown x15",
      "Run 60 sec @ Zone 3"
    ],
    "block2": [
      "Hammer Curl x12",
      "Rear Delt Fly x12",
      "Farmer Carry 60 sec",
      "Mountain Climber 30 sec"
    ],
    "core": [
      "Stability Ball Rollout x12-15",
      "Side Plank 45 sec/side",
      "Reverse Crunch x20",
      "Pallof Press x12/side"
    ],
    "targets": {
      "Single Arm DB Row": "70 lb",
      "Hammer Curl": "30 lb",
      "Rear Delt Fly": "20 lb",
      "Farmer Carry": "70 lb each"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W4D3",
    "week": 4,
    "day": "Wednesday",
    "dayNum": 3,
    "title": "Conditioning",
    "subtitle": "Full-body conditioning with treadmill intervals",
    "type": "SWITCH",
    "duration": "45-55 min",
    "phase": "Test",
    "progression": "Keep quality high; beat Week 1 reps or weight",
    "warmup": [
      "Treadmill 2:00 Zone 1",
      "Treadmill 2:00 Zone 2",
      "Treadmill 2:00 Zone 3",
      "Goblet Squat x10",
      "High Knees x20"
    ],
    "block1": [
      "KB Swing x20",
      "Goblet Squat x15",
      "Push-up x15",
      "Incline Walk 90 sec"
    ],
    "block2": [
      "Treadmill Sprint 30 sec",
      "Walk Recovery 60 sec",
      "Med Ball Slam x15",
      "Half Ball Mountain Climber x30 sec"
    ],
    "core": [
      "Half Ball Plank 45 sec",
      "Toe Touch x20",
      "Medicine Ball Russian Twist x20",
      "Hollow Hold 30 sec"
    ],
    "targets": {
      "KB Swing": "53 lb",
      "Goblet Squat": "60 lb",
      "Push-up": "Bodyweight",
      "Med Ball Slam": "Weighted Ball"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W4D4",
    "week": 4,
    "day": "Thursday",
    "dayNum": 4,
    "title": "Upper Strength",
    "subtitle": "Heavy upper body strength + abs",
    "type": "RESISTANCE",
    "duration": "45-55 min",
    "phase": "Test",
    "progression": "Keep quality high; beat Week 1 reps or weight",
    "warmup": [
      "Treadmill 6:00 build Zone 1 to Zone 3",
      "Band Pull Apart x20",
      "External Rotation x12/side",
      "Light DB Press x12"
    ],
    "block1": [
      "Heavy DB Bench 4 x 8",
      "Heavy One Arm Row 4 x 8/side",
      "Incline Walk 60 sec between rounds"
    ],
    "block2": [
      "Incline Fly x12",
      "Lateral Raise x15",
      "Alternating Curl x12",
      "Overhead Triceps Extension x12"
    ],
    "core": [
      "Pallof Press x12/side",
      "Plank 60 sec",
      "Dead Bug x15/side",
      "Suitcase Carry 60 sec/side"
    ],
    "targets": {
      "Heavy DB Bench": "65 lb",
      "Heavy One Arm Row": "75 lb",
      "Lateral Raise": "20 lb",
      "Overhead Triceps": "40 lb"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  },
  {
    "id": "W4D5",
    "week": 4,
    "day": "Friday",
    "dayNum": 5,
    "title": "Athletic HIIT",
    "subtitle": "Explosive full-body HIIT + core finisher",
    "type": "POWER",
    "duration": "45-55 min",
    "phase": "Test",
    "progression": "Keep quality high; beat Week 1 reps or weight",
    "warmup": [
      "Treadmill 6:00 build",
      "World's Greatest Stretch x3/side",
      "Butt Kick x20",
      "Plank Shoulder Tap x20"
    ],
    "block1": [
      "DB Thruster x12",
      "Renegade Row x10 total",
      "Burpee x10",
      "Run 60 sec"
    ],
    "block2": [
      "KB Swing x20",
      "DB Reverse Lunge x8/side",
      "Med Ball Slam x15",
      "Sprint 30 sec + Walk 60 sec"
    ],
    "core": [
      "Hollow Hold 30 sec",
      "Leg Raise x15",
      "Russian Twist x20",
      "Plank 60 sec"
    ],
    "targets": {
      "DB Thruster": "30 lb each",
      "Renegade Row": "35 lb",
      "KB Swing": "53 lb",
      "DB Reverse Lunge": "35 lb each"
    },
    "notes": [
      "Move quickly but keep form strict.",
      "Use RPE 7-8 on most working sets.",
      "Log weights, reps, HR, calories, and notes after the session."
    ]
  }
];