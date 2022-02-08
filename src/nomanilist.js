const FETCH = require('./fetch.js');

var nom = {

  SETtoken: async function (token=String) {
    this.token = token;
  },

  SEARCHuser: async function (name=String) {
    var query = `
    query {
      User (name: "${name}") {
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
    `; 


    return await FETCH(this.token, query);
  },

  SEARCHmedia: async function (name=String, MEDIATYPE=Enumerator) {
    var query = `
    query {
      Media (search: "${name}" type: ${MEDIATYPE}) {
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
    `; 

    return await FETCH(this.token, query);
  },

  SEARCHcharacter: async function (name=String) {
    var query = `
    query {
      Character (search: "${name}") {
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
    `; 

    return await FETCH(this.token, query);
  },

  SEARCHstaff: async function (name=String) {
    var query = `
    query {
      Staff (search: "${name}") {
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
    `; 

    return await FETCH(this.token, query);
  },

  SEARCHstudio: async function (name=String) {
    var query = `
    query {
      Studio (search: "${name}") {
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
    `; 
    return await FETCH(this.token, query);
  },

  GETuser: async function (id=Int) {
    var query = `
    query {
      User (id: ${id}) {
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
    `; 


    return await FETCH(this.token, query);
  },

  GETmedia: async function (id=Int) {
    var query = `
    query {
      Media (id: ${id}) {
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
    `; 

    return await FETCH(this.token, query);
  },

  GETcharacter: async function (id=Int) {
    var query = `
    query {
      Character (id: ${id}) {
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
        dateOfBirth
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
    `; 

    return await FETCH(this.token, query);
  },

  GETstaff: async function (id=Int) {
    var query = `
    query {
      Staff (id: ${id}) {
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
              userPreferre
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
    `; 

    return await FETCH(this.token, query);
  },

  GETstudio: async function (id=Int) {
    var query = `
    query {
      Studio (id: ${id}) {
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
    `; 
    return await FETCH(this.token, query);
  },

  GETactivity: async function (id=Int) {
    var query = `
    query {
      Activity (id: ${id}) {
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
            name
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
            title {
              romaji
              english
              native
              userPreferred 
            }
            type
          }
          replies {
            id
            userId
          }
          likes {
            id
            name
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
            name
          }
        }
      }
    }
    `; 

    return await FETCH(this.token, query);
  },

  GETactivityRE: async function (id=Int) {
    var query = `
    query {
      ActivityReply (id: ${id}) {
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
          name
        }
      }
    }
    `; 

    return await FETCH(this.token, query);
  },

  GETthread: async function (id=Int) {
    var query = `
    query {
      thread (id: ${id}) {
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
          title {
            romaji
            english
            native
            userPreferred
          }
          type
        }
        likes {
          id
          name
        }
      }
    }
    `; 

    return await FETCH(this.token, query);
  },

  GETthreadCOM: async function (id=Int) {
    var query = `
    query {
      ThreadComment (id: ${id}) {
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
          name
        }
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  GETreview: async function (id=Int) {
    var query = `
    query {
      Review (id: ${id}) {
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

    return await FETCH(this.token, query);
  },

  GETnotification: async function (RESETcount=Boolean) {
    var query = `
    query {
      Notification (resetNotificationCount: ${RESETcount}) {  
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
    `;

    return await FETCH(this.token, query);
  },

  GETmedialist: async function (userID=String, MEDIATYPE=Enumerator) {
    var query = `
    query {
      MediaListCollection(userId: ${userID}, type: ${MEDIATYPE}) {
        lists {
          entries {
            score
            progress
            progressVolumes
            repeat
            notes
            startedAt
            completedAt
            media {
              siteUrl
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              description
              genres
              type
              format
              episodes
              season
              volumes
              chapters
              status
              averageScore
              countryOfOrigin
            }
          }
        }
      }
    }
    `; 

    return await FETCH(this.token, query);
  },

  SENDmessage: async function (text=String, userID=Int, privatee=Boolean) {
    var query = `
    mutation {
      SaveMessageActivity (message: ${text}, recipientId: ${userID}, private: ${privatee}) {  
        siteUrl  
        id
        createdAt
      }
    }
    `;

    return await FETCH(this.token,query);
  },

  EDITmessage: async function (id=Int, text=String) {
    var query = `
    mutation {
      SaveMessageActivity (id: ${id}, message: ${text}) {   
        siteUrl 
        id
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  POSTactivity: async function (text=String) {
    var query = `
    mutation {
      SaveTextActivity (text: ${text}) {    
        siteUrl
        id
        createdAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  EDITactivity: async function (id=Int, text=String) {
    var query = `
    mutation {
      SaveTextActivity (id: ${id}, text: ${text}) {    
        siteUrl
        id
        updatedAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  DELactivity: async function (id=Int) {
    var query = `
    mutation {
      DeleteActivity (id: ${id}) {
        deleted
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  POSTactivityRE: async function (id=Int, text=String) {
    var query = `
    mutation {
      SaveActivityReply (activityId: ${id}, text: ${text}) {    
        id
        createdAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  EDITactivityRE: async function (id=Int, text=String) {
    var query = `
    mutation {
      SaveActivityReply (id: ${id}, text: ${text}) {    
        id
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  DELactivityRE: async function (id=Int) {
    var query = `
    mutation {
      DeleteActivityReply (id: ${id}) {
        deleted
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  POSTthread: async function (title=String, body=String, categories=Int, mediacategories=Int) {
    var query = `
    mutation {
      SaveThread (title: "${title}", body: "${body}", categories: ${categories}, mediaCategories: ${mediacategories}) {   
        siteUrl 
        id
        createdAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  EDITthread: async function (id=Int, title=String, body=String, categories=Int, mediacategories=Int) {
    var query = `
    mutation {
      SaveThread (id: ${id}, title: "${title}", body: "${body}", categories: ${categories}, mediaCategories: ${mediacategories}) {  
        siteUrl  
        id
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  DELthread: async function (id=Int) {
    var query = `
    mutation {
      DeleteThread (id: ${id}) {
        deleted
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  POSTthreadCOM: async function (id=Int, text=String) {
    var query = `
    mutation {
      SaveThreadComment (threadid: ${id}, comment: "${text}") {    
        siteUrl
        id
        createdAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  EDITthreadCOM: async function (id=Int, text=String) {
    var query = `
    mutation{
      SaveThreadComment (id: ${id}, comment: "${text}") {    
        siteUrl
        id
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  DELthreadCOM: async function (id=Int) {
    var query = `
    mutation {
      DeleteThreadComment (id: ${id}) {    
        deleted
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  POSTreview: async function (id=Int, body=String, summary=String, score=Int, privatee=Boolean) {
    var query = `
    mutation {
      SaveReview (mediaId: ${id}, body: "${body}", summary: "${summary}", score: ${score}, private: ${privatee}) {
        siteUrl
        id
        mediaid
        summary
        score
        createdAt
      }
    }  
    `;

    return await FETCH(this.token, query);
  },

  EDITreview: async function (id=Int, body=String, summary=String, score=Int, privatee=Boolean) {
    var query = `
    mutation {
      SaveReview (id: ${id}, body: "${body}", summary: "${summary}", score: ${score}, private: ${privatee}) {
        siteUrl
        id
      }
    }  
    `;

    return await FETCH(this.token, query);
  },

  DELreview: async function (id=Int) {
    var query = `
    mutation {
      DeleteReview (id: ${id}) {
        deleted
      }
    }  
    `;
    return await FETCH(this.token, query);
  },

  RATEreview: async function (id=Int, REVIEWRATING=Enumerator) {
    var query = `
    mutation {
      RateReview (id: ${id}, rating: ${REVIEWRATING}) {
        siteUrl
        id
        userid
        mediaid
        rating
        ratingAmount
        userRating
      }
    }  
    `;

    return await FETCH(this.token, query);
  },

  TOGGLEfavourite: async function (id=Int, FAVOURITETYPE=Enumerator) {
    var query = `
    mutation {
      ToggleFavourite(${FAVOURITETYPE.toLowerCase()}Id: ${id}) {
        anime {
          nodes {
            id
          }
        }
        manga {
          nodes {
            id
          }
        }
        characters {
          nodes {
            id
          }
        }
        staff {
          nodes {
            id
          }
        }
        studios {
          nodes {
            id
          }
        }
      }
    }
    `;

    return await FETCH(this.token, query);
  },
  
  TOGGLElike: async function (id=Int, LIKABLETYPE=Enumerator) {
    var query = `
    mutation {
      ToggleLike (id: ${id}, type: ${LIKABLETYPE}) {
        siteUrl
        id
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  TOGGLEfollow: async function (id=Int) {
    var query = `
    mutation {
      ToggleFollow (userId: ${id}) {
        siteUrl
        id
        name
        isFollowing
        isFollower
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  SUBSCRIBEactivity: async function (id=Int, subscribe=Boolean) {
    var query = `
    mutation {
      ToggleActivitySubscription (activityId: ${id}, subscribe: ${subscribe}) {
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

    return await FETCH(this.token, query);
  },

  SUBSCRIBEthread: async function (id=Int, subscribe=Boolean) {
    var query = `
    mutation {
      ToggleThreadSubscription (threadId: ${id}, subscribe: ${subscribe}) {
        siteUrl
        isSubscribed
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  USERcolor: async function (color=String) {
    var query = `
    mutation {
      UpdateUser (profileColor: "${color}") {
        siteUrl
        id
        updatedAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  USERabout: async function (about=String) {
    var query = `
    mutation {
      UpdateUser (about: "${about}") {
        siteUrl
        id
        updatedAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  USERbadge: async function (text=String) {
    var query = `
    mutation {
      UpdateUser (donatorBadge: "${text}") {
        siteUrl
        id
        updatedAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  ADDlistentry: async function (id=Int, status=Enumerator, score=Int, progress=Int, repeat=Int, privatee=Boolean, notes=String) {
    var query = `
    mutation {
      SaveMediaListEntry (mediaId: ${id}, status: ${status}, scoreRaw: ${score}, progress: ${progress}, repeat: ${repeat}, private: ${privatee}, notes: "${notes}") {
        id
        createdAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  UPDATElistentry: async function (id=Int, status=Enumerator, score=Int, progress=Int, repeat=Int, privatee=Boolean, notes=String) {
    var query = `
    mutation  {
      SaveMediaListEntry (id: ${id}, status: ${status}, scoreRaw: ${score}, progress: ${progress}, repeat: ${repeat}, private: ${privatee}, notes: "${notes}") {
        id
        updatedAt
      }
    }
    `;

    return await FETCH(this.token, query);
  },

  DELlistentry: async function (id=Int) {
    var query = `
    mutation {
      DeleteMediaListEntry (id: ${id}) {
        deleted
      }
    }
    `;

    return await FETCH(this.token, query);
  }
}

module.exports = nom;
