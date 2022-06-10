const callGraphql = require('./callGraphql.js');

module.exports = {

  AccessToken: async function (token) {
    globalThis.token = token;
  },

  Try: async function (query, vars={}, AuthIsOptional=true) {
    return await callGraphql(query, vars, AuthIsOptional);
  },

  Search: {
    user: async function (search) {
      var query = `
      query ($search: String) {
        Page { users (search: $search) {
          siteUrl
          id
          name  
          previousNames {
            name
            createdAt
            updatedAt
          }
          about
          avatar {
            large
            medium
          }
          bannerImage
          donatorTier
          donatorBadge
          moderatorRoles
          unreadNotificationCount
          isFollowing
          isFollower
          isBlocked
          createdAt
          updatedAt
          bans
          options {
            titleLanguage
            displayAdultContent
            airingNotifications
            profileColor
            notificationOptions {
              type
              enabled
            }
            timezone
            activityMergeTime
            staffNameLanguage
          }
          mediaListOptions {
            scoreFormat
            rowOrder
            animeList {
              sectionOrder
              splitCompletedSectionByFormat
              customLists
              advancedScoring
              advancedScoringEnabled
            }
            mangaList {
              sectionOrder
              splitCompletedSectionByFormat
              customLists
              advancedScoring
              advancedScoringEnabled
            }
          }
          favourites {
            anime {
              nodes {
                siteUrl
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                description
                favourites
                isFavourite
                isAdult
                popularity
                genres
                type
                format
                episodes
                chapters
                volumes
                season
                seasonYear
                status
                averageScore
                meanScore
                countryOfOrigin
              }
            }
            manga {
              nodes {
                siteUrl
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                description
                favourites
                isFavourite
                isAdult
                popularity
                genres
                type
                format
                episodes
                chapters
                volumes
                season
                seasonYear
                status
                averageScore
                meanScore
                countryOfOrigin
              }
            }
            characters {
              nodes {
                siteUrl
                id
                name {
                  first
                  middle
                  last
                  full
                  native
                  userPreferred
                  alternative
                  alternativeSpoiler
                }
                image {
                  large
                  medium
                }
                description
                gender
                dateOfBirth {
                  year
                  month
                  day
                }
                age
                bloodType
                favourites
                isFavourite
              }
            }
            staff {
              nodes {
                siteUrl
                id
                name {
                  first
                  middle
                  last
                  full
                  native
                  userPreferred
                }
                languageV2
                image {
                  large
                  medium
                }
                description
                primaryOccupations
                gender
                dateOfBirth {
                  year
                  month
                  day
                }
                dateOfDeath {
                  year
                  month
                  day
                }
                age
                yearsActive
                homeTown
                bloodType
                favourites
                isFavourite
              }
            }
            studios {
              nodes {
                siteUrl
                id
                name
                favourites
                isFavourite
              }
            }
          }
          statistics {
            anime {
              count
              meanScore
              standardDeviation
              minutesWatched
              episodesWatched
              formats {
                count
                meanScore
                minutesWatched
                mediaIds
                format
              }
              statuses {
                count
                meanScore
                minutesWatched
                mediaIds
                status
              }
              scores {
                count
                meanScore
                minutesWatched
                mediaIds
                score
              }
              lengths {
                count
                meanScore
                minutesWatched
                mediaIds
                length
              }
              releaseYears {
                count
                meanScore
                minutesWatched
                mediaIds
                releaseYear
              }
              startYears {
                count
                meanScore
                minutesWatched
                mediaIds
                startYear
              }
              genres {
                count
                meanScore
                minutesWatched
                mediaIds
                genre
              }
              tags {
                count
                meanScore
                minutesWatched
                mediaIds
                tag {
                  id
                  name
                  description
                  category
                  rank
                  isAdult
                }
              }
              countries {
                count
                meanScore
                minutesWatched
                mediaIds
                country
              }
              voiceActors {
                count
                meanScore
                minutesWatched
                mediaIds
                voiceActor {
                  siteUrl
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    userPreferred
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                  favourites
                  isFavourite
                }
              }
              staff {
                count
                meanScore
                minutesWatched
                mediaIds
                staff {
                  siteUrl
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    userPreferred
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                  favourites
                  isFavourite
                }
              }
              studios {
                count
                meanScore
                minutesWatched
                mediaIds
                studio {
                  siteUrl
                  id
                  name
                  favourites
                  isFavourite
                }
              }
            }
            manga {
              count
              meanScore
              standardDeviation
              chaptersRead
              volumesRead
              formats {
                count
                meanScore
                chaptersRead
                mediaIds
                format
              }
              statuses {
                count
                meanScore
                chaptersRead
                mediaIds
                status
              }
              scores {
                count
                meanScore
                chaptersRead
                mediaIds
                score
              }
              lengths {
                count
                meanScore
                chaptersRead
                mediaIds
                length
              }
              releaseYears {
                count
                meanScore
                chaptersRead
                mediaIds
                releaseYear
              }
              startYears {
                count
                meanScore
                chaptersRead
                mediaIds
                startYear
              }
              genres {
                count
                meanScore
                chaptersRead
                mediaIds
                genre
              }
              tags {
                count
                meanScore
                chaptersRead
                mediaIds
                tag {
                  id
                  name
                  description
                  category
                  rank
                  isAdult
                }
              }
              countries {
                count
                meanScore
                chaptersRead
                mediaIds
                country
              }
              voiceActors {
                count
                meanScore
                chaptersRead
                mediaIds
                voiceActor {
                  siteUrl
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    userPreferred
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                  favourites
                  isFavourite
                }
              }
              staff {
                count
                meanScore
                chaptersRead
                mediaIds
                staff {
                  siteUrl
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    userPreferred
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                  favourites
                  isFavourite
                }
              }
              studios {
                count
                meanScore
                chaptersRead
                mediaIds
                studio {
                  siteUrl
                  id
                  name
                  favourites
                  isFavourite
                }
              }
            }
          }
        } }
      }
      `
  
      return (await callGraphql(query, {search: search}, true)).Page.users;
    },
  
    anime: async function (search) {
      var query = `
      query ($search: String) {
        Page { media (search: $search type: ANIME) {
          siteUrl
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
          description
          favourites
          isFavourite
          isAdult
          popularity
          genres
          type
          format
          episodes
          chapters
          volumes
          season
          seasonYear
          status
          averageScore
          meanScore
          countryOfOrigin
          trailer {
            id
            site
            thumbnail
          }
          studios {
            nodes {
              siteUrl
              id
              name
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }
            }
          }
          tags {
            id
            name
            description
            category
            rank
            isAdult
          }
          characters {
            nodes {
              siteUrl
              id
              name {
                first
                middle
                last
                full
                native
                userPreferred
                alternative
                alternativeSpoiler
              }
              image {
                large
                medium
              }
              description
              gender
              dateOfBirth {
                year
                month
                day
              }
              age
              bloodType
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }     
            }
          }
          relations {
            nodes {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              description
              favourites
              isFavourite
              isAdult
              popularity
              genres
              type
              format
              episodes
              chapters
              volumes
              season
              seasonYear
              status
              averageScore
              meanScore
              countryOfOrigin
            }
          }
          recommendations {
            nodes {
              mediaRecommendation {
                siteUrl
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                description
                favourites
                isFavourite
                isAdult
                popularity
                genres
                type
                format
                episodes
                chapters
                volumes
                season
                seasonYear
                status
                averageScore
                meanScore
                countryOfOrigin
              }
            }
          }
          externalLinks {
            url
            site
            id
          }
          streamingEpisodes {
            title
            thumbnail
            url
            site
          }
          airingSchedule {
            edges {
              node {
                id
                airingAt
                timeUntilAiring
                episode
              }
            }
          }
          reviews {
            edges {
              node {
                id
                userId
                summary
                rating
                score
                siteUrl
              }
            }
          }
        } }
      }
      `
      return (await callGraphql(query, {search: search}, true)).Page.media;
    },
  
    manga: async function (search) {
      var query = `
      query ($search: String) {
        Page { media (search: $search type: MANGA) {
          siteUrl
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
          description
          favourites
          isFavourite
          isAdult
          popularity
          genres
          type
          format
          episodes
          chapters
          volumes
          season
          seasonYear
          status
          averageScore
          meanScore
          countryOfOrigin
          trailer {
            id
            site
            thumbnail
          }
          studios {
            nodes {
              siteUrl
              id
              name
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }
            }
          }
          tags {
            id
            name
            description
            category
            rank
            isAdult
          }
          characters {
            nodes {
              siteUrl
              id
              name {
                first
                middle
                last
                full
                native
                userPreferred
                alternative
                alternativeSpoiler
              }
              image {
                large
                medium
              }
              description
              gender
              dateOfBirth {
                year
                month
                day
              }
              age
              bloodType
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }     
            }
          }
          relations {
            nodes {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              description
              favourites
              isFavourite
              isAdult
              popularity
              genres
              type
              format
              episodes
              chapters
              volumes
              season
              seasonYear
              status
              averageScore
              meanScore
              countryOfOrigin
            }
          }
          recommendations {
            nodes {
              mediaRecommendation {
                siteUrl
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                description
                favourites
                isFavourite
                isAdult
                popularity
                genres
                type
                format
                episodes
                chapters
                volumes
                season
                seasonYear
                status
                averageScore
                meanScore
                countryOfOrigin
              }
            }
          }
          externalLinks {
            url
            site
            id
          }
          streamingEpisodes {
            title
            thumbnail
            url
            site
          }
          airingSchedule {
            edges {
              node {
                id
                airingAt
                timeUntilAiring
                episode
              }
            }
          }
          reviews {
            edges {
              node {
                id
                userId
                summary
                rating
                score
                siteUrl
              }
            }
          }
        } }
      }
      `
      return (await callGraphql(query, {search: search}, true)).Page.media;
    },
  
    character: async function (search) {
      var query = `
      query ($search: String) {
        Page { characters (search: $search) {
          siteUrl
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
            alternative
            alternativeSpoiler
          }
          image {
            large
            medium
          }
          description
          gender
          dateOfBirth {
            year
            month
            day
          }
          age
          bloodType
          favourites
          isFavourite
          media {
            nodes {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              description
              favourites
              isFavourite
              isAdult
              popularity
              genres
              type
              format
              episodes
              chapters
              volumes
              season
              seasonYear
              status
              averageScore
              meanScore
              countryOfOrigin
            }
          }
        } }       
      }
      `
      return (await callGraphql(query, {search: search}, true)).Page.characters;
    },
  
    staff: async function (search) {
      var query = `
      query ($search: String) {
        Page { staff (search: $name) {
          siteUrl
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          languageV2
          image {
            large
            medium
          }
          description
          primaryOccupations
          gender
          dateOfBirth {
            year
            month
            day
          }
          dateOfDeath {
            year
            month
            day
          }
          age
          yearsActive
          homeTown
          bloodType
          favourites
          isFavourite
          characters {
            nodes {
              siteUrl
              id
              name {
                full
                first
                middle
                last
                native
                userPreferred
                alternative
                alternativeSpoiler
              }
              image {
                large
                medium
              }
              description
              gender
              dateOfBirth {
                year
                month
                day
              }
              age
              bloodType
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }
            }
          }
        } }
      }
      `
      return (await callGraphql(query, {search: search}, true)).Page.staff;
    },
  
    studio: async function (search) {
      var query = `
      query ($search: String) {
        Page { studios (search: $search) {
          siteUrl
          id
          name
          favourites
          isFavourite
          media {
            nodes {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              description
              favourites
              isFavourite
              popularity
              genres
              type
              format
              episodes
              chapters
              volumes
              season
              seasonYear
              status
              averageScore
              meanScore
              countryOfOrigin
            }
          }
        } }
      }
      `
      return (await callGraphql(query, {search: search}, true)).Page.studios;
    },
  },

  Fetch: {
    user: async function (id) {
      var query = `
      query ($id: Int) {
        User (id: $id) {
          siteUrl
          id
          name  
          previousNames {
            name
            createdAt
            updatedAt
          }
          about
          avatar {
            large
            medium
          }
          bannerImage
          donatorTier
          donatorBadge
          moderatorRoles
          unreadNotificationCount
          isFollowing
          isFollower
          isBlocked
          createdAt
          updatedAt
          bans
          options {
            titleLanguage
            displayAdultContent
            airingNotifications
            profileColor
            notificationOptions {
              type
              enabled
            }
            timezone
            activityMergeTime
            staffNameLanguage
          }
          mediaListOptions {
            scoreFormat
            rowOrder
            animeList {
              sectionOrder
              splitCompletedSectionByFormat
              customLists
              advancedScoring
              advancedScoringEnabled
            }
            mangaList {
              sectionOrder
              splitCompletedSectionByFormat
              customLists
              advancedScoring
              advancedScoringEnabled
            }
          }
          favourites {
            anime {
              nodes {
                siteUrl
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                description
                favourites
                isFavourite
                isAdult
                popularity
                genres
                type
                format
                episodes
                chapters
                volumes
                season
                seasonYear
                status
                averageScore
                meanScore
                countryOfOrigin
              }
            }
            manga {
              nodes {
                siteUrl
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                description
                favourites
                isFavourite
                isAdult
                popularity
                genres
                type
                format
                episodes
                chapters
                volumes
                season
                seasonYear
                status
                averageScore
                meanScore
                countryOfOrigin
              }
            }
            characters {
              nodes {
                siteUrl
                id
                name {
                  first
                  middle
                  last
                  full
                  native
                  userPreferred
                  alternative
                  alternativeSpoiler
                }
                image {
                  large
                  medium
                }
                description
                gender
                dateOfBirth {
                  year
                  month
                  day
                }
                age
                bloodType
                favourites
                isFavourite
              }
            }
            staff {
              nodes {
                siteUrl
                id
                name {
                  first
                  middle
                  last
                  full
                  native
                  userPreferred
                }
                languageV2
                image {
                  large
                  medium
                }
                description
                primaryOccupations
                gender
                dateOfBirth {
                  year
                  month
                  day
                }
                dateOfDeath {
                  year
                  month
                  day
                }
                age
                yearsActive
                homeTown
                bloodType
                favourites
                isFavourite
              }
            }
            studios {
              nodes {
                siteUrl
                id
                name
                favourites
                isFavourite
              }
            }
          }
          statistics {
            anime {
              count
              meanScore
              standardDeviation
              minutesWatched
              episodesWatched
              formats {
                count
                meanScore
                minutesWatched
                mediaIds
                format
              }
              statuses {
                count
                meanScore
                minutesWatched
                mediaIds
                status
              }
              scores {
                count
                meanScore
                minutesWatched
                mediaIds
                score
              }
              lengths {
                count
                meanScore
                minutesWatched
                mediaIds
                length
              }
              releaseYears {
                count
                meanScore
                minutesWatched
                mediaIds
                releaseYear
              }
              startYears {
                count
                meanScore
                minutesWatched
                mediaIds
                startYear
              }
              genres {
                count
                meanScore
                minutesWatched
                mediaIds
                genre
              }
              tags {
                count
                meanScore
                minutesWatched
                mediaIds
                tag {
                  id
                  name
                  description
                  category
                  rank
                  isAdult
                }
              }
              countries {
                count
                meanScore
                minutesWatched
                mediaIds
                country
              }
              voiceActors {
                count
                meanScore
                minutesWatched
                mediaIds
                voiceActor {
                  siteUrl
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    userPreferred
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                  favourites
                  isFavourite
                }
              }
              staff {
                count
                meanScore
                minutesWatched
                mediaIds
                staff {
                  siteUrl
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    userPreferred
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                  favourites
                  isFavourite
                }
              }
              studios {
                count
                meanScore
                minutesWatched
                mediaIds
                studio {
                  siteUrl
                  id
                  name
                  favourites
                  isFavourite
                }
              }
            }
            manga {
              count
              meanScore
              standardDeviation
              chaptersRead
              volumesRead
              formats {
                count
                meanScore
                chaptersRead
                mediaIds
                format
              }
              statuses {
                count
                meanScore
                chaptersRead
                mediaIds
                status
              }
              scores {
                count
                meanScore
                chaptersRead
                mediaIds
                score
              }
              lengths {
                count
                meanScore
                chaptersRead
                mediaIds
                length
              }
              releaseYears {
                count
                meanScore
                chaptersRead
                mediaIds
                releaseYear
              }
              startYears {
                count
                meanScore
                chaptersRead
                mediaIds
                startYear
              }
              genres {
                count
                meanScore
                chaptersRead
                mediaIds
                genre
              }
              tags {
                count
                meanScore
                chaptersRead
                mediaIds
                tag {
                  id
                  name
                  description
                  category
                  rank
                  isAdult
                }
              }
              countries {
                count
                meanScore
                chaptersRead
                mediaIds
                country
              }
              voiceActors {
                count
                meanScore
                chaptersRead
                mediaIds
                voiceActor {
                  siteUrl
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    userPreferred
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                  favourites
                  isFavourite
                }
              }
              staff {
                count
                meanScore
                chaptersRead
                mediaIds
                staff {
                  siteUrl
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    userPreferred
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                  favourites
                  isFavourite
                }
              }
              studios {
                count
                meanScore
                chaptersRead
                mediaIds
                studio {
                  siteUrl
                  id
                  name
                  favourites
                  isFavourite
                }
              }
            }
          }
        }
      }
      `
  
      return (await callGraphql(query, {id: id}, true)).User;
    },
  
    anime: async function (id) {
      var query = `
      query ($id: Int) {
        Media (id: $id, type: ANIME) {
          siteUrl
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
          description
          favourites
          isFavourite
          isAdult
          popularity
          genres
          type
          format
          episodes
          chapters
          volumes
          season
          seasonYear
          status
          averageScore
          meanScore
          countryOfOrigin
          trailer {
            id
            site
            thumbnail
          }
          studios {
            nodes {
              siteUrl
              id
              name
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }
            }
          }
          tags {
            id
            name
            description
            category
            rank
            isAdult
          }
          characters {
            nodes {
              siteUrl
              id
              name {
                first
                middle
                last
                full
                native
                userPreferred
                alternative
                alternativeSpoiler
              }
              image {
                large
                medium
              }
              description
              gender
              dateOfBirth {
                year
                month
                day
              }
              age
              bloodType
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }     
            }
          }
          relations {
            nodes {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              description
              favourites
              isFavourite
              isAdult
              popularity
              genres
              type
              format
              episodes
              chapters
              volumes
              season
              seasonYear
              status
              averageScore
              meanScore
              countryOfOrigin
            }
          }
          recommendations {
            nodes {
              mediaRecommendation {
                siteUrl
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                description
                favourites
                isFavourite
                isAdult
                popularity
                genres
                type
                format
                episodes
                chapters
                volumes
                season
                seasonYear
                status
                averageScore
                meanScore
                countryOfOrigin
              }
            }
          }
          externalLinks {
            url
            site
            id
          }
          streamingEpisodes {
            title
            thumbnail
            url
            site
          }
          airingSchedule {
            edges {
              node {
                id
                airingAt
                timeUntilAiring
                episode
              }
            }
          }
          reviews {
            edges {
              node {
                id
                userId
                summary
                rating
                score
                siteUrl
              }
            }
          }
        }
      }
      `
      return (await callGraphql(query, {id: id}, true)).Media;
    },

    manga: async function (id) {
      var query = `
      query ($id: Int) {
        Media (id: $id, type: MANGA) {
          siteUrl
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
          description
          favourites
          isFavourite
          isAdult
          popularity
          genres
          type
          format
          episodes
          chapters
          volumes
          season
          seasonYear
          status
          averageScore
          meanScore
          countryOfOrigin
          trailer {
            id
            site
            thumbnail
          }
          studios {
            nodes {
              siteUrl
              id
              name
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }
            }
          }
          tags {
            id
            name
            description
            category
            rank
            isAdult
          }
          characters {
            nodes {
              siteUrl
              id
              name {
                first
                middle
                last
                full
                native
                userPreferred
                alternative
                alternativeSpoiler
              }
              image {
                large
                medium
              }
              description
              gender
              dateOfBirth {
                year
                month
                day
              }
              age
              bloodType
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }     
            }
          }
          relations {
            nodes {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              description
              favourites
              isFavourite
              isAdult
              popularity
              genres
              type
              format
              episodes
              chapters
              volumes
              season
              seasonYear
              status
              averageScore
              meanScore
              countryOfOrigin
            }
          }
          recommendations {
            nodes {
              mediaRecommendation {
                siteUrl
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                description
                favourites
                isFavourite
                isAdult
                popularity
                genres
                type
                format
                episodes
                chapters
                volumes
                season
                seasonYear
                status
                averageScore
                meanScore
                countryOfOrigin
              }
            }
          }
          externalLinks {
            url
            site
            id
          }
          streamingEpisodes {
            title
            thumbnail
            url
            site
          }
          airingSchedule {
            edges {
              node {
                id
                airingAt
                timeUntilAiring
                episode
              }
            }
          }
          reviews {
            edges {
              node {
                id
                userId
                summary
                rating
                score
                siteUrl
              }
            }
          }
        }
      }
      `
      return (await callGraphql(query, {id: id}, true)).Media;
    },
  
    character: async function (id) {
      var query = `
      query ($id: Int) {
        Character (id: $id) {
          siteUrl
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
            alternative
            alternativeSpoiler
          }
          image {
            large
            medium
          }
          description
          gender
          dateOfBirth {
            year
            month
            day
          }
          age
          bloodType
          favourites
          isFavourite
          media {
            nodes {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              description
              favourites
              isFavourite
              isAdult
              popularity
              genres
              type
              format
              episodes
              chapters
              volumes
              season
              seasonYear
              status
              averageScore
              meanScore
              countryOfOrigin
            }
          }
        }       
      }
      `
      return (await callGraphql(query, {id: id}, true)).Character;
    },
  
    staff: async function (id) {
      var query = `
      query ($id: Int) {
        Staff (id: $id) {
          siteUrl
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          languageV2
          image {
            large
            medium
          }
          description
          primaryOccupations
          gender
          dateOfBirth {
            year
            month
            day
          }
          dateOfDeath {
            year
            month
            day
          }
          age
          yearsActive
          homeTown
          bloodType
          favourites
          isFavourite
          characters {
            nodes {
              siteUrl
              id
              name {
                full
                first
                middle
                last
                native
                userPreferred
                alternative
                alternativeSpoiler
              }
              image {
                large
                medium
              }
              description
              gender
              dateOfBirth {
                year
                month
                day
              }
              age
              bloodType
              favourites
              isFavourite
              media {
                nodes {
                  siteUrl
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                  bannerImage
                  description
                  favourites
                  isFavourite
                  isAdult
                  popularity
                  genres
                  type
                  format
                  episodes
                  chapters
                  volumes
                  season
                  seasonYear
                  status
                  averageScore
                  meanScore
                  countryOfOrigin
                }
              }
            }
          }
        }
      }
      `
      return (await callGraphql(query, {id: id}, true)).Staff;
    },
  
    studio: async function (id) {
      var query = `
      query ($id: Int) {
        Studio (id: $id) {
          siteUrl
          id
          name
          favourites
          isFavourite
          media {
            nodes {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              description
              favourites
              isFavourite
              popularity
              genres
              type
              format
              episodes
              chapters
              volumes
              season
              seasonYear
              status
              averageScore
              meanScore
              countryOfOrigin
            }
          }
        } 
      }
      `
      return (await callGraphql(query, {id: id}, true)).Studio;
    },

    activity: async function (id) {
      var query = `
      query ($id: Int) {
        Activity (id: $id) {
          ... on TextActivity {
            siteUrl 
            id
            userId
            type
            replyCount
            text
            isLocked
            isSubscribed
            likeCount
            isLiked
            createdAt
            replies {
              id
              userId
            }
            likes {
              id
            }
          }
          ... on ListActivity {
            siteUrl 
            id
            userId
            type
            replyCount
            status
            progress
            isLocked
            isSubscribed
            likeCount
            isLiked
            createdAt
            media {
              id
            }
            replies {
              id
              userId
            }
            likes {
              id
            }
          }
          ... on MessageActivity {
            siteUrl 
            id
            recipientId
            messengerId
            type
            replyCount
            message
            isLocked
            isSubscribed
            likeCount
            isLiked
            isPrivate
            createdAt
            replies {
              id
              userId
            }
            likes {
              id
            }
          }
        }
      }
      `; 
  
      return (await callGraphql(query, {id: id}, true)).Activity;
    },
  
    activityReply: async function (id) {
      var query = `
      query ($id: Int) {
        ActivityReply (id: $id) {
          siteUrl 
          id
          userId
          activityId
          text
          likeCount
          isLiked
          createdAt
          likes {
            id
          }
        }
      }
      `; 
  
      return (await callGraphql(query, {id: id}, true)).ActivityReply;
    },
  
    thread: async function (id) {
      var query = `
      query ($id: Int) {
        thread (id: $id) {
          siteUrl 
          id
          title
          body
          userId
          replyUserId
          replyCommentId
          replyCount
          viewCount
          isLocked
          isSticky
          isSubscribed
          likeCount
          isLiked
          repliedAt
          createdAt
          updatedAt
          categories {
            id
            name
          }
          mediaCategories {
            id
          }
          likes {
            id
          }
        }
      }
      `; 
  
      return (await callGraphql(query, {id: id}, true)).thread;
    },
  
    threadComment: async function (id) {
      var query = `
      query ($id: Int) {
        ThreadComment (id: $id) {
          siteUrl 
          id
          userId
          threadId
          comment
          likeCount
          isLiked
          createdAt
          updatedAt
          likes {
            id
          }
        }
      }
      `;
  
      return (await callGraphql(query, {id: id}, true)).ThreadComment;
    },
  
    review: async function (id) {
      var query = `
      query ($id: Int) {
        Review (id: $id) {
          siteUrl 
          id
          mediaId
          mediaType
          summary
          body
          rating
          ratingAmount
          userRating
          score
          private
          createdAt
          updatedAt
        }
      }
      `; 
  
      return (await callGraphql(query, {id: id}, true)).Review;
    },
  },

  User: {
    themeColor: async function (color) {
      var query = `
      mutation ($color: String) {
        UpdateUser (profileColor: $color) {
          siteUrl
          id
          updatedAt
        }
      }
      `;
  
      return (await callGraphql(query, {color: color})).UpdateUser;
    },
  
    about: async function (about) {
      var query = `
      mutation ($about: String) {
        UpdateUser (about: $about) {
          siteUrl
          id
          updatedAt
        }
      }
      `;
  
      return (await callGraphql(query, {about: about})).UpdateUser;
    },
  
    badge: async function (badgeText) {
      var query = `
      mutation ($badgeText: String) {
        UpdateUser (donatorBadge: $badgeText) {
          siteUrl
          id
          updatedAt
        }
      }
      `;
  
      return (await callGraphql(query, {badgeText: badgeText})).UpdateUser;
    },
  },

  Entries: {
    search: async function (userName, mediaId) {
      var query = `
      query ($userName: String, $mediaId: Int) {
        MediaList(userName: $userName, mediaId: $mediaId) {
          id
          userId
          mediaId
          status
          score 
          progress
          progressVolumes
          repeat 
          priority 
          private 
          notes 
          hiddenFromStatusLists 
          customLists 
          advancedScores
          startedAt {
            year
            month
            day
          }
          completedAt {
            year
            month
            day
          }
          updatedAt
          createdAt
        }
      }      
      `;
  
      return (await callGraphql(query, {userName: userName, mediaId: mediaId}, true)).MediaList;
    },

    fetch: async function (id) {
      var query = `
      query ($id: Int) {
        MediaList(id: $id) {
          id
          userId
          mediaId
          status
          score 
          progress
          progressVolumes
          repeat 
          priority 
          private 
          notes 
          hiddenFromStatusLists 
          customLists 
          advancedScores
          startedAt {
            year
            month
            day
          }
          completedAt {
            year
            month
            day
          }
          updatedAt
          createdAt
        }
      }      
      `;
  
      return (await callGraphql(query, {id: id}, true)).MediaList;
    },

    add: async function (mediaId, status='PLANNING', score=0, progress=0, repeat=0, Private=false, notes='') {
      var query = ` 
      mutation ($mediaId: Int, $status: MediaListStatus, $score: Int, $progress: Int, $repeat: Int, $Private: Boolean, $notes: String) {
        SaveMediaListEntry (mediaId: $mediaId, status: $status, scoreRaw: $score, progress: $progress, repeat: $repeat, private: $Private, notes: $notes) {
          id
          createdAt
        }
      }
      `;
  
      return (await callGraphql(query, {mediaId: mediaId, status: status, score: score, progress: progress, repeat: repeat, Private: Private, notes: notes})).SaveMediaListEntry;
    },
    
    update: async function (id, status='PLANNING', score=0, progress=0, repeat=0, Private=false, notes='') {
      var query = `
      mutation ($id: Int, $status: MediaListStatus, $score: Int, $progress: Int, $repeat: Int, $Private: Boolean, $notes: String) {
        SaveMediaListEntry (id: $id, status: $status, scoreRaw: $score, progress: $progress, repeat: $repeat, private: $Private, notes: $notes) {
          id
          updatedAt
        }
      }
      `
  
      return (await callGraphql(query, {id: id, status: status, score: score, progress: progress, repeat: repeat, Private: Private, notes: notes})).SaveMediaListEntry;
    },

    delete: async function (id) {
      var query = `
      mutation ($id: id) {
        DeleteMediaListEntry (id: $id) {
          deleted
        }
      }
      `
  
      return (await callGraphql(query, {id: id})).DeleteMediaListEntry;
    },
  },

  onNotification: async function (AwaitFunction, timeOut=8000, entities=40) {
    var query = `
    query {
      Notification {  
        ... on AiringNotification {
          id
          type
          animeId
          episode
          contexts
          createdAt
        }
        ... on FollowingNotification {
          id
          userId
          type
          context
          createdAt 
        }
        ... on ActivityMessageNotification {
          id
          userId
          type
          activityId
          context
          createdAt
        }
        ... on ActivityMentionNotification {
          id
          userId
          type
          activityId
          context
          createdAt
        }
        ... on ActivityReplyNotification {
          id
          userId
          type
          activityId  
          context
          createdAt
        }
        ... on ActivityReplySubscribedNotification {
          id
          userId
          type
          activityId 
          context
          createdAt
        }
        ... on ActivityLikeNotification {
          id
          userId
          type
          activityId 
          context
          createdAt
        }
        ... on ActivityReplyLikeNotification {
          id
          userId
          type
          activityId 
          context
          createdAt
        }
        ... on ThreadCommentMentionNotification {
          id
          userId
          type
          commentId
          context
          createdAt
        }
        ... on ThreadCommentReplyNotification {
          id
          userId
          type
          commentId
          context
          createdAt      
        }
        ... on ThreadCommentSubscribedNotification {
          id
          userId
          type
          commentId
          context
          createdAt
        }
        ... on ThreadCommentLikeNotification {
          id
          userId
          type
          commentId
          context
          createdAt
        }
        ... on ThreadLikeNotification {
          id
          userId
          type
          threadId
          context
          createdAt
        }
        ... on RelatedMediaAdditionNotification {
          id
          type
          mediaId
          context
          createdAt
        }
        ... on MediaDataChangeNotification {
          id
          type
          mediaId
          context
          reason
          createdAt
        }
        ... on MediaMergeNotification {
          id
          type
          mediaId
          deletedMediaTitles
          context
          reason
          createdAt      
        }
        ... on MediaDeletionNotification {
          id
          type
          deletedMediaTitle
          context
          reason
          createdAt   
        }
      }
    }
    `

    let EX = (await callGraphql(query)).Notification;

    var query = `
    query ($entities: Int) {
      Page (perPage: $entities) { notifications {  
        ... on AiringNotification {
          id
          type
          animeId
          episode
          contexts
          createdAt
        }
        ... on FollowingNotification {
          id
          userId
          type
          context
          createdAt 
        }
        ... on ActivityMessageNotification {
          id
          userId
          type
          activityId
          context
          createdAt
        }
        ... on ActivityMentionNotification {
          id
          userId
          type
          activityId
          context
          createdAt
        }
        ... on ActivityReplyNotification {
          id
          userId
          type
          activityId  
          context
          createdAt
        }
        ... on ActivityReplySubscribedNotification {
          id
          userId
          type
          activityId 
          context
          createdAt
        }
        ... on ActivityLikeNotification {
          id
          userId
          type
          activityId 
          context
          createdAt
        }
        ... on ActivityReplyLikeNotification {
          id
          userId
          type
          activityId 
          context
          createdAt
        }
        ... on ThreadCommentMentionNotification {
          id
          userId
          type
          commentId
          context
          createdAt
        }
        ... on ThreadCommentReplyNotification {
          id
          userId
          type
          commentId
          context
          createdAt      
        }
        ... on ThreadCommentSubscribedNotification {
          id
          userId
          type
          commentId
          context
          createdAt
        }
        ... on ThreadCommentLikeNotification {
          id
          userId
          type
          commentId
          context
          createdAt
        }
        ... on ThreadLikeNotification {
          id
          userId
          type
          threadId
          context
          createdAt
        }
        ... on RelatedMediaAdditionNotification {
          id
          type
          mediaId
          context
          createdAt
        }
        ... on MediaDataChangeNotification {
          id
          type
          mediaId
          context
          reason
          createdAt
        }
        ... on MediaMergeNotification {
          id
          type
          mediaId
          deletedMediaTitles
          context
          reason
          createdAt      
        }
        ... on MediaDeletionNotification {
          id
          type
          deletedMediaTitle
          context
          reason
          createdAt   
        }
      } }
    }
    `
    setInterval(async function () {
      let {notifications} = (await callGraphql(query, {entities: entities})).Page;
      if (!notifications) return;
      for (let notification of notifications) {
        if (EX.createdAt < notification.createdAt) {
          AwaitFunction.call(notification, notification);
        }
      };
      EX = notifications[0];
    }, timeOut);
  },

  sendMessage: async function (message, recipientId, Private=false) {
    var query = `
    mutation ($message: String, $recipientId: Int, $Private: Boolean) {
      SaveMessageActivity (message: $message, recipientId: $recipientId, private: $Private) {  
        siteUrl  
        id
        createdAt
      }
    }
    `;

    return (await callGraphql(query, {message: message, recipientId: recipientId, Private: Private})).SaveMessageActivity;
  },

  editMessage: async function (id, message) {
    var query = `
    mutation {
      SaveMessageActivity (id: $id, message: $message) {   
        siteUrl 
        id
      }
    }
    `;

    return (await callGraphql(query, {id: id, message: message})).SaveMessageActivity;
  },

  postActivity: async function (text) {
    var query = `
    mutation ($text: String) {
      SaveTextActivity (text: $text) {    
        siteUrl
        id
        createdAt
      }
    }
    `;

    return (await callGraphql(query, {text: text})).SaveMessageActivity;
  },

  editActivity: async function (id, text) {
    var query = `
    mutation ($id: Int, $text: String) {
      SaveTextActivity (id: $id, text: $text) {    
        siteUrl
        id
        updatedAt
      }
    }
    `;

    return (await callGraphql(query, {id: id, text: text})).SaveMessageActivity;
  },

  deleteActivity: async function (id) {
    var query = `
    mutation ($id: Int) {
      DeleteActivity (id: $id) {
        deleted
      }
    }
    `;

    return (await callGraphql(query, {id: id})).DeleteActivity;
  },

  postActivityReply: async function (activityId, text) {
    var query = `
    mutation ($activityId: Int, $text: String) {
      SaveActivityReply (activityId: $activityId, text: $text) {    
        id
        createdAt
      }
    }
    `;

    return (await callGraphql(query, {activityId: activityId, text: text})).SaveActivityReply;
  },

  editActivityReply: async function (id, text) {
    var query = `
    mutation ($id: Int, $text: String) {
      SaveActivityReply (id: $id, text: $text) {    
        id
      }
    }
    `;

    return (await callGraphql(query, {id: id, text: text})).SaveActivityReply;
  },

  deleteActivityReply: async function (id) {
    var query = `
    mutation ($id: Int) {
      DeleteActivityReply (id: $id) {
        deleted
      }
    }
    `;

    return (await callGraphql(query, {id: id})).DeleteActivityReply;
  },

  postThread: async function (title, body, categories, mediaCategories) {
    var query = `
    mutation ($title: String, $body: String, $categories: [Int], $mediaCategories: [Int]) {
      SaveThread (title: $title, body: $body, categories: $categories, mediaCategories: $mediaCategories) {   
        siteUrl 
        id
        createdAt
      }
    }
    `;

    return (await callGraphql(query, {title: title, body: body, categories: categories, mediaCategories: mediaCategories})).SaveThread;
  },

  editThread: async function (id, title, body, categories, mediaCategories) {
    var query = `
    mutation ($id: Int, $title: String, $body: String, $categories: [Int], $mediaCategories: [Int]) {
      SaveThread (id: $id, title: $title, body: $body, categories: $categories, mediaCategories: $mediaCategories) {  
        siteUrl  
        id
      }
    }
    `;

    return (await callGraphql(query, {id: id, title: title, body: body, categories: categories, mediaCategories: mediaCategories})).SaveThread;
  },

  deleteThread: async function (id) {
    var query = `
    mutation ($id: Int) {
      DeleteThread (id: $id) {
        deleted
      }
    }
    `;

    return (await callGraphql(query, {id: id})).DeleteThread;
  },

  postThreadComment: async function (threadid, comment) {
    var query = `
    mutation ($threadid: Int, $comment: String) {
      SaveThreadComment (threadid: $threadid, comment: $comment) {    
        siteUrl
        id
        createdAt
      }
    }
    `;

    return (await callGraphql(query, {threadid: threadid, comment: comment})).SaveThreadComment;
  },

  editThreadComment: async function (id, comment) {
    var query = `
    mutation ($id: Int, $comment: String) {
      SaveThreadComment (id: $id, comment: $comment) {    
        siteUrl
        id
      }
    }
    `;

    return (await callGraphql(query, {id: id, comment: comment})).SaveThreadComment;
  },

  deleteThreadComment: async function (id) {
    var query = `
    mutation ($id: Int) {
      DeleteThreadComment (id: $id) {    
        deleted
      }
    }
    `;

    return (await callGraphql(query, {id: id})).DeleteThreadComment;
  },

  postReview: async function (mediaId, body, summary, score, Private=false) {
    var query = `
    mutation ($mediaId: Int, $body: String, $summary: String, $score: Int, $Private: Boolean) {
      SaveReview (mediaId: $mediaId, body: $body, summary: $summary, score: $score, private: $Private) {
        siteUrl
        id
        mediaid
        summary
        score
        createdAt
      }
    }  
    `;

    return (await callGraphql(query, {mediaId: mediaId, body: body, summary: summary, score: score, Private: Private})).SaveReview;
  },

  editReview: async function (id, body, summary, score, Private=false) {
    var query = `
    mutation ($id: Int, $body: String, $summary: String, $score: Int, $Private: Boolean) {
      SaveReview (id: $id, body: $body, summary: $summary, score: $score, private: $Private) {
        siteUrl
        id
      }
    }  
    `;

    return (await callGraphql(query, {id: id, body: body, summary: summary, score: score, Private: Private})).SaveReview;
  },

  deleteReview: async function (id) {
    var query = `
    mutation ($id: Int) {
      DeleteReview (id: $id) {
        deleted
      }
    }  
    `;
    return (await callGraphql(query, {id: id})).DeleteReview;
  },

  rateReview: async function (reviewId, RATINGTYPE) {
    var query = `
    mutation ($reviewId: Int, $RATINGTYPE: ReviewRating) {
      RateReview (reviewId: $reviewId, rating: $RATINGTYPE) {
        siteUrl
        id
        rating
      }
    }  
    `;
    return (await callGraphql(query, {reviewId: reviewId, RATINGTYPE: RATINGTYPE})).RateReview;
  },

  toggleFavourite: async function (id, FAVOURITETYPE) {
    var query = `
    mutation ($id: Int) {
      ToggleFavourite(${FAVOURITETYPE.toLowerCase()}Id: $id) {
        anime {
          edges {
            id
            favouriteOrder
          }
        }
        manga {
          edges {
            id
            favouriteOrder
          }
        }
        characters {
          edges {
            id
            favouriteOrder
          }
        }
        staff {
          edges {
            id
            favouriteOrder
          }
        }
        studios {
          edges {
            id
            favouriteOrder
          }
        }
      }
    }
    `;

    return (await callGraphql(query, {id: id})).ToggleFavourite;
  },
  
  toggleLike: async function (id, LIKEABLETYPE) {
    var query = `
    mutation ($id: Int, $LIKEABLETYPE: LikeableType) {
      ToggleLike: ToggleLikeV2 (id: $id, type: $LIKEABLETYPE) {
        ... on TextActivity {
          siteUrl 
          isLiked
        }
        ... on ListActivity {
          siteUrl 
          isLiked
        }
        ... on MessageActivity {
          siteUrl 
          isLiked
        }        
        ... on ActivityReply {
          siteUrl 
          isLiked
        }
        ... on Thread {
          siteUrl 
          isLiked
        }
        ... on ThreadComment {
          siteUrl 
          isLiked
        }
      }
    }
    `;

    return (await callGraphql(query, {id: id, LIKEABLETYPE: LIKEABLETYPE})).ToggleLike;
  },

  toggleFollow: async function (userId) {
    var query = `
    mutation ($userId: Int) {
      ToggleFollow (userId: $userId) {
        siteUrl
        id
        name
        isFollowing
        isFollower
      }
    }
    `;

    return (await callGraphql(query, {userId: userId})).ToggleFollow;
  },

  subscribeActivity: async function (activityId, subscribe=true) {
    var query = `
    mutation ($activityId: Int, $subscribe: Boolean) {
      ToggleActivitySubscription (activityId: $activityId, subscribe: $subscribe) {
        ... on TextActivity {
          siteUrl 
          isSubscribed
        }
        ... on ListActivity {
          siteUrl 
          isSubscribed
        }
        ... on MessageActivity {
          siteUrl 
          isSubscribed
        }
      }
    }
    `;

    return (await callGraphql(query, {activityId: activityId, subscribe: subscribe})).ToggleActivitySubscription;
  },

  subscribeThread: async function (threadId, subscribe=true) {
    var query = `
    mutation {
      ToggleThreadSubscription (threadId: $threadId, subscribe: $subscribe) {
        siteUrl
        isSubscribed
      }
    }
    `;

    return (await callGraphql(query, {threadId: threadId, subscribe: subscribe})).ToggleThreadSubscription;
  },
}

