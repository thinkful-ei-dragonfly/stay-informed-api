const expectedResponse = {
  representatives: [
    {
      member_id: 'B000944',
      first_name: 'Sherrod',
      middle_name: '',
      last_name: 'Brown',
      suffix: null,
      date_of_birth: '1952-11-09',
      gender: 'M',
      url: 'https://www.brown.senate.gov',
      times_topics_url: '',
      times_tag: '',
      govtrack_id: '400050',
      cspan_id: '5051',
      votesmart_id: '27018',
      icpsr_id: '29389',
      twitter_account: 'SenSherrodBrown',
      facebook_account: 'SenatorSherrodBrown',
      youtube_account: 'SherrodBrownOhio',
      crp_id: 'N00003535',
      google_entity_id: '/m/034s80',
      rss_url: 'https://www.brown.senate.gov/rss/feeds/?type=all&',
      in_office: true,
      current_party: 'D',
      most_recent_vote: '2019-08-01',
      last_updated: '2019-08-13 07:35:30 -0400',
      roles: [
        {
          congress: '116',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: 'H2OH13033',
          seniority: '13',
          senate_class: '1',
          state_rank: 'senior',
          lis_id: 'S307',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2019-01-03',
          end_date: '2021-01-03',
          office: '503 Hart Senate Office Building',
          phone: '202-224-2315',
          fax: null,
          contact_form: 'http://www.brown.senate.gov/contact/',
          bills_sponsored: 41,
          bills_cosponsored: 314,
          missed_votes_pct: 1.15,
          votes_with_party_pct: 90.35,
          committees: [
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSBK.json',
              side: 'minority',
              title: 'Ranking Member',
              rank_in_party: 1,
              begin_date: '2019-01-09',
              end_date: '2021-01-03'
            },
            {
              name: "Committee on Veterans' Affairs",
              code: 'SSVA',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSVA.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 4,
              begin_date: '2019-01-09',
              end_date: '2021-01-03'
            },
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSAF.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 3,
              begin_date: '2019-01-09',
              end_date: '2021-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFI.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 7,
              begin_date: '2019-01-09',
              end_date: '2021-01-03'
            }
          ],
          subcommittees: [
            {
              name: 'International Trade, Customs, and Global Competitiveness',
              code: 'SSFI13',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFI/subcommittees/SSFI13.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 7,
              begin_date: '2019-01-31',
              end_date: '2021-01-03'
            },
            {
              name: 'Social Security, Pensions, and Family Policy',
              code: 'SSFI02',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFI/subcommittees/SSFI02.json',
              side: 'minority',
              title: 'Ranking Member',
              rank_in_party: 1,
              begin_date: '2019-01-31',
              end_date: '2021-01-03'
            },
            {
              name: 'Health Care',
              code: 'SSFI10',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFI/subcommittees/SSFI10.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 6,
              begin_date: '2019-01-31',
              end_date: '2021-01-03'
            },
            {
              name: 'Securities, Insurance, and Investment',
              code: 'SSBK04',
              parent_committee_id: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSBK/subcommittees/SSBK04.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 9,
              begin_date: '2019-01-18',
              end_date: '2021-01-03'
            },
            {
              name: 'National Security and International Trade and Finance',
              code: 'SSBK05',
              parent_committee_id: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSBK/subcommittees/SSBK05.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 5,
              begin_date: '2019-01-18',
              end_date: '2021-01-03'
            },
            {
              name: 'Financial Institutions and Consumer Protection',
              code: 'SSBK08',
              parent_committee_id: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSBK/subcommittees/SSBK08.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 9,
              begin_date: '2019-01-18',
              end_date: '2021-01-03'
            },
            {
              name: 'Housing, Transportation, and Community Development',
              code: 'SSBK09',
              parent_committee_id: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSBK/subcommittees/SSBK09.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 7,
              begin_date: '2019-01-18',
              end_date: '2021-01-03'
            },
            {
              name: 'Economic Policy Subcommittee',
              code: 'SSBK12',
              parent_committee_id: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSBK/subcommittees/SSBK12.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 6,
              begin_date: '2019-01-18',
              end_date: '2021-01-03'
            },
            {
              name: 'Commodities, Risk Management, and Trade',
              code: 'SSAF13',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSAF/subcommittees/SSAF13.json',
              side: 'minority',
              title: 'Ranking Member',
              rank_in_party: 1,
              begin_date: '',
              end_date: '2021-01-03'
            },
            {
              name: 'Rural Development and Energy',
              code: 'SSAF15',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSAF/subcommittees/SSAF15.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 2,
              begin_date: '',
              end_date: '2021-01-03'
            },
            {
              name: 'Nutrition, Agricultural Research, and Specialty Crops',
              code: 'SSAF16',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSAF/subcommittees/SSAF16.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 3,
              begin_date: '',
              end_date: '2021-01-03'
            }
          ]
        },
        {
          congress: '115',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: 'S6OH00163',
          seniority: '11',
          senate_class: '1',
          state_rank: 'senior',
          lis_id: 'S307',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2017-01-03',
          end_date: '2019-01-03',
          office: '713 Hart Senate Office Building',
          phone: '202-224-2315',
          fax: '202-228-6321',
          contact_form: 'http://www.brown.senate.gov/contact/',
          bills_sponsored: 71,
          bills_cosponsored: 501,
          missed_votes_pct: 0.33,
          votes_with_party_pct: 93.8,
          committees: [
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSAF.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 3,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            },
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSBK.json',
              side: 'minority',
              title: 'Ranking Member',
              rank_in_party: 1,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFI.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 8,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            },
            {
              name: "Committee on Veterans' Affairs",
              code: 'SSVA',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSVA.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 4,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            }
          ],
          subcommittees: [
            {
              name: 'Nutrition, Agricultural Research, and Specialty Crops',
              code: 'SSAF16',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSAF/subcommittees/SSAF16.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 3,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Rural Development and Energy',
              code: 'SSAF15',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSAF/subcommittees/SSAF15.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 2,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Health Care',
              code: 'SSFI10',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFI/subcommittees/SSFI10.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 6,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Social Security, Pensions, and Family Policy',
              code: 'SSFI02',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFI/subcommittees/SSFI02.json',
              side: 'minority',
              title: 'Ranking Member',
              rank_in_party: 1,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Rural Development and Energy',
              code: 'SSAF15',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSAF/subcommittees/SSAF15.json',
              side: 'minority',
              title: 'Ranking Member',
              rank_in_party: 1,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Commodities, Risk Management, and Trade',
              code: 'SSAF13',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSAF/subcommittees/SSAF13.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 2,
              begin_date: '',
              end_date: '2019-01-03'
            }
          ]
        },
        {
          congress: '114',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: 'S6OH00163',
          seniority: '9',
          senate_class: '1',
          state_rank: '',
          lis_id: 'S307',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2015-01-06',
          end_date: '2017-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 71,
          bills_cosponsored: 319,
          missed_votes_pct: 2.19,
          votes_with_party_pct: 93.48,
          committees: [
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/114/senate/committees/SSBK.json',
              rank_in_party: 1,
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: "Committee on Veterans' Affairs",
              code: 'SSVA',
              api_uri:
                'https://api.propublica.org/congress/v1/114/senate/committees/SSVA.json',
              rank_in_party: null,
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/114/senate/committees/SSFI.json',
              rank_in_party: null,
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/114/senate/committees/SSAF.json',
              rank_in_party: null,
              begin_date: '',
              end_date: '2017-01-03'
            }
          ],
          subcommittees: []
        },
        {
          congress: '113',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '7',
          senate_class: '1',
          state_rank: '',
          lis_id: 'S307',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2013-01-03',
          end_date: '2015-01-02',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 69,
          bills_cosponsored: 316,
          missed_votes_pct: 1.52,
          votes_with_party_pct: 97.84,
          committees: [
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSFI.json',
              rank_in_party: 12,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: "Committee on Veterans' Affairs",
              code: 'SSVA',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSVA.json',
              rank_in_party: 4,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSAF.json',
              rank_in_party: 5,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Select Committee on Ethics',
              code: 'SLET',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SLET.json',
              rank_in_party: 3,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSBK.json',
              rank_in_party: 5,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            }
          ],
          subcommittees: [
            {
              name: 'Housing, Transportation, and Community Development',
              code: 'SSBK09',
              parent_committee_id: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSBK/subcommittees/SSBK09.json',
              rank_in_party: 4,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'National Security and International Trade and Finance',
              code: 'SSBK05',
              parent_committee_id: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSBK/subcommittees/SSBK05.json',
              rank_in_party: 2,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Commodities, Risk Management, and Trade',
              code: 'SSAF13',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSAF/subcommittees/SSAF13.json',
              rank_in_party: 2,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Rural Development and Energy',
              code: 'SSAF15',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSAF/subcommittees/SSAF15.json',
              rank_in_party: 1,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Nutrition, Agricultural Research, and Specialty Crops',
              code: 'SSAF16',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSAF/subcommittees/SSAF16.json',
              rank_in_party: 4,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Commodities, Risk Management, and Trade',
              code: 'SSAF13',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSAF/subcommittees/SSAF13.json',
              rank_in_party: 2,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Rural Development and Energy',
              code: 'SSAF15',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSAF/subcommittees/SSAF15.json',
              rank_in_party: 1,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Nutrition, Agricultural Research, and Specialty Crops',
              code: 'SSAF16',
              parent_committee_id: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSAF/subcommittees/SSAF16.json',
              rank_in_party: 4,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Financial Institutions and Consumer Protection',
              code: 'SSBK08',
              parent_committee_id: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSBK/subcommittees/SSBK08.json',
              rank_in_party: 1,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            }
          ]
        },
        {
          congress: '112',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '5',
          senate_class: '1',
          state_rank: '',
          lis_id: 'S307',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2011-01-04',
          end_date: '2013-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 119,
          bills_cosponsored: 357,
          missed_votes_pct: 1.23,
          votes_with_party_pct: 94.79,
          committees: [],
          subcommittees: []
        },
        {
          congress: '111',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '3',
          senate_class: '1',
          state_rank: '',
          lis_id: 'S307',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2009-01-06',
          end_date: '2011-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 113,
          bills_cosponsored: 446,
          missed_votes_pct: 1.18,
          votes_with_party_pct: 96.86,
          committees: [
            {
              name: 'Committee on Appropriations',
              code: 'SSAP',
              api_uri:
                'https://api.propublica.org/congress/v1/111/senate/committees/SSAP.json',
              rank_in_party: 18,
              begin_date: '2010-07-22',
              end_date: '2011-01-04'
            },
            {
              name: "Committee on Veterans' Affairs",
              code: 'SSVA',
              api_uri:
                'https://api.propublica.org/congress/v1/111/senate/committees/SSVA.json',
              rank_in_party: 5,
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            },
            {
              name: 'Select Committee on Ethics',
              code: 'SLET',
              api_uri:
                'https://api.propublica.org/congress/v1/111/senate/committees/SLET.json',
              rank_in_party: 3,
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/111/senate/committees/SSBK.json',
              rank_in_party: 7,
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on Health, Education, Labor, and Pensions',
              code: 'SSHR',
              api_uri:
                'https://api.propublica.org/congress/v1/111/senate/committees/SSHR.json',
              rank_in_party: 8,
              begin_date: '2009-01-21',
              end_date: '2010-07-22'
            }
          ],
          subcommittees: []
        },
        {
          congress: '110',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '1',
          senate_class: '1',
          state_rank: '',
          lis_id: 'S307',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2007-01-04',
          end_date: '2009-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 76,
          bills_cosponsored: 545,
          missed_votes_pct: 1.52,
          votes_with_party_pct: 95.67,
          committees: [
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri:
                'https://api.propublica.org/congress/v1/110/senate/committees/SSAF.json',
              rank_in_party: 9,
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri:
                'https://api.propublica.org/congress/v1/110/senate/committees/SSBK.json',
              rank_in_party: 9,
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on Health, Education, Labor, and Pensions',
              code: 'SSHR',
              api_uri:
                'https://api.propublica.org/congress/v1/110/senate/committees/SSHR.json',
              rank_in_party: 11,
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: "Committee on Veterans' Affairs",
              code: 'SSVA',
              api_uri:
                'https://api.propublica.org/congress/v1/110/senate/committees/SSVA.json',
              rank_in_party: 6,
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            }
          ],
          subcommittees: []
        },
        {
          congress: '109',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '14',
          district: '13',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:13',
          start_date: '2005-01-04',
          end_date: '2007-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 23,
          bills_cosponsored: 704,
          missed_votes_pct: 6.67,
          votes_with_party_pct: 93.73,
          committees: [],
          subcommittees: []
        },
        {
          congress: '108',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '12',
          district: '13',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:13',
          start_date: '2003-01-07',
          end_date: '2005-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 19,
          bills_cosponsored: 568,
          missed_votes_pct: 4.59,
          votes_with_party_pct: 93.56,
          committees: [],
          subcommittees: []
        },
        {
          congress: '107',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '10',
          district: '13',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:13',
          start_date: '2001-01-03',
          end_date: '2003-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 15,
          bills_cosponsored: 503,
          missed_votes_pct: 1.41,
          votes_with_party_pct: 91.04,
          committees: [],
          subcommittees: []
        },
        {
          congress: '106',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '8',
          district: '13',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:13',
          start_date: '1999-01-06',
          end_date: '2001-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 16,
          bills_cosponsored: 490,
          missed_votes_pct: 7.58,
          votes_with_party_pct: 89.13,
          committees: [],
          subcommittees: []
        },
        {
          congress: '105',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '6',
          district: '13',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:13',
          start_date: '1997-01-07',
          end_date: '1999-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 6,
          bills_cosponsored: 285,
          missed_votes_pct: 2.86,
          votes_with_party_pct: 87.34,
          committees: [],
          subcommittees: []
        },
        {
          congress: '104',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '4',
          district: '13',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:13',
          start_date: '1995-01-04',
          end_date: '1997-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 9,
          bills_cosponsored: 197,
          missed_votes_pct: 2.01,
          votes_with_party_pct: 87.13,
          committees: [],
          subcommittees: []
        },
        {
          congress: '103',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'D',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '2',
          district: '13',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:13',
          start_date: '1993-01-05',
          end_date: '1995-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 10,
          bills_cosponsored: 233,
          missed_votes_pct: 2.32,
          votes_with_party_pct: 88.69,
          committees: [],
          subcommittees: []
        }
      ],
      photoUrl:
        'https://theunitedstates.io/images/congress/450x550/B000944.jpg',
      smallPhotoUrl:
        'https://theunitedstates.io/images/congress/225x275/B000944.jpg',
      topContributors: [
        {
          org_name: 'Ohio State University',
          total: '234279',
          pacs: '0',
          indivs: '234279'
        },
        {
          org_name: 'League of Conservation Voters',
          total: '199524',
          pacs: '9999',
          indivs: '189525'
        },
        {
          org_name: 'JStreetPAC',
          total: '178872',
          pacs: '9706',
          indivs: '169166'
        },
        {
          org_name: 'Votesane PAC',
          total: '117526',
          pacs: '0',
          indivs: '117526'
        },
        {
          org_name: 'Cleveland Clinic',
          total: '101801',
          pacs: '0',
          indivs: '101801'
        },
        {
          org_name: 'Case Western Reserve University',
          total: '99946',
          pacs: '0',
          indivs: '99946'
        },
        {
          org_name: 'Baker & Hostetler',
          total: '70049',
          pacs: '10000',
          indivs: '60049'
        },
        {
          org_name: 'Thompson Hine LLP',
          total: '66661',
          pacs: '5000',
          indivs: '61661'
        },
        {
          org_name: 'Jones Day',
          total: '64496',
          pacs: '0',
          indivs: '64496'
        },
        {
          org_name: 'Kohrman, Jackson & Krantz',
          total: '64268',
          pacs: '0',
          indivs: '64268'
        }
      ],
      topIndustries: [
        {
          industry_code: 'W06',
          industry_name: 'Retired',
          indivs: '2753968',
          pacs: '0',
          total: '2753968'
        },
        {
          industry_code: 'K01',
          industry_name: 'Lawyers/Law Firms',
          indivs: '2154524',
          pacs: '196825',
          total: '2351349'
        },
        {
          industry_code: 'W04',
          industry_name: 'Education',
          indivs: '1190415',
          pacs: '0',
          total: '1190415'
        },
        {
          industry_code: 'F07',
          industry_name: 'Securities & Investment',
          indivs: '684602',
          pacs: '210850',
          total: '895452'
        },
        {
          industry_code: 'H01',
          industry_name: 'Health Professionals',
          indivs: '607111',
          pacs: '278600',
          total: '885711'
        },
        {
          industry_code: 'F10',
          industry_name: 'Real Estate',
          indivs: '741228',
          pacs: '111000',
          total: '852228'
        },
        {
          industry_code: 'Q02',
          industry_name: 'Democratic/Liberal',
          indivs: '780137',
          pacs: '20781',
          total: '800918'
        },
        {
          industry_code: 'F09',
          industry_name: 'Insurance',
          indivs: '283541',
          pacs: '383082',
          total: '666623'
        },
        {
          industry_code: 'Q03',
          industry_name: 'Leadership PACs',
          indivs: '0',
          pacs: '471800',
          total: '471800'
        },
        {
          industry_code: 'K02',
          industry_name: 'Lobbyists',
          indivs: '453310',
          pacs: '7000',
          total: '460310'
        }
      ],
      contributionTotals: {
        total_donations: '28659986.61',
        spent: '27840435.93',
        cash_on_hand: '1371245.26'
      }
    },
    {
      member_id: 'P000449',
      first_name: 'Rob',
      middle_name: '',
      last_name: 'Portman',
      suffix: null,
      date_of_birth: '1955-12-19',
      gender: 'M',
      url: 'https://www.portman.senate.gov',
      times_topics_url: '',
      times_tag: '',
      govtrack_id: '400325',
      cspan_id: '31819',
      votesmart_id: '27008',
      icpsr_id: '29386',
      twitter_account: 'SenRobPortman',
      facebook_account: 'senrobportman',
      youtube_account: 'SenRobPortman',
      crp_id: 'N00003682',
      google_entity_id: '/m/0343xg',
      rss_url: 'https://www.portman.senate.gov/public/index.cfm/rss/feed',
      in_office: true,
      current_party: 'R',
      most_recent_vote: '2019-08-01',
      last_updated: '2019-08-13 07:35:31 -0400',
      roles: [
        {
          congress: '116',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: 'S0OH00133',
          seniority: '9',
          senate_class: '3',
          state_rank: 'junior',
          lis_id: 'S349',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2019-01-03',
          end_date: '2021-01-03',
          office: '448 Russell Senate Office Building',
          phone: '202-224-3353',
          fax: null,
          contact_form:
            'https://www.portman.senate.gov/public/index.cfm/contact?p=contact-form',
          bills_sponsored: 45,
          bills_cosponsored: 120,
          missed_votes_pct: 0,
          votes_with_party_pct: 98.09,
          committees: [
            {
              name: 'Committee on Foreign Relations',
              code: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFR.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 9,
              begin_date: '2019-01-09',
              end_date: '2021-01-03'
            },
            {
              name: 'Joint Economic Committee',
              code: 'JSEC',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/JSEC.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 4,
              begin_date: '2019-01-09',
              end_date: '2021-01-03'
            },
            {
              name: 'Committee on Homeland Security and Governmental Affairs',
              code: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSGA.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 2,
              begin_date: '2019-01-09',
              end_date: '2021-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFI.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 9,
              begin_date: '2019-01-09',
              end_date: '2021-01-03'
            }
          ],
          subcommittees: [
            {
              name: 'International Trade, Customs, and Global Competitiveness',
              code: 'SSFI13',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFI/subcommittees/SSFI13.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 6,
              begin_date: '2019-01-31',
              end_date: '2021-01-03'
            },
            {
              name: 'Permanent Subcommittee on Investigations',
              code: 'SSGA01',
              parent_committee_id: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSGA/subcommittees/SSGA01.json',
              side: 'majority',
              title: 'Chair',
              rank_in_party: 1,
              begin_date: '2019-01-31',
              end_date: '2021-01-03'
            },
            {
              name: 'Regulatory Affairs and Federal Management Subcommittee',
              code: 'SSGA19',
              parent_committee_id: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSGA/subcommittees/SSGA19.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 2,
              begin_date: '2019-01-31',
              end_date: '2021-01-03'
            },
            {
              name: 'Social Security, Pensions, and Family Policy',
              code: 'SSFI02',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFI/subcommittees/SSFI02.json',
              side: 'majority',
              title: 'Chair',
              rank_in_party: 1,
              begin_date: '2019-01-31',
              end_date: '2021-01-03'
            },
            {
              name: 'Taxation and IRS Oversight',
              code: 'SSFI11',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFI/subcommittees/SSFI11.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 7,
              begin_date: '2019-01-31',
              end_date: '2021-01-03'
            },
            {
              name: 'Europe and Regional Security Cooperation Subcommittee',
              code: 'SSFR01',
              parent_committee_id: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFR/subcommittees/SSFR01.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 3,
              begin_date: '',
              end_date: '2021-01-03'
            },
            {
              name:
                "Western Hemisphere, Transnational Crime, Civilian Security, Democracy, Human Rights, and Global Women's Issues",
              code: 'SSFR06',
              parent_committee_id: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFR/subcommittees/SSFR06.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 2,
              begin_date: '',
              end_date: '2021-01-03'
            },
            {
              name: 'Africa and Global Health Policy Subcommittee',
              code: 'SSFR09',
              parent_committee_id: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFR/subcommittees/SSFR09.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 3,
              begin_date: '',
              end_date: '2021-01-03'
            },
            {
              name:
                'State Department and USAID Management, International Operations, and Bilateral International Development',
              code: 'SSFR14',
              parent_committee_id: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/116/senate/committees/SSFR/subcommittees/SSFR14.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 4,
              begin_date: '',
              end_date: '2021-01-03'
            }
          ]
        },
        {
          congress: '115',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: 'S0OH00133',
          seniority: '7',
          senate_class: '3',
          state_rank: 'junior',
          lis_id: 'S349',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2017-01-03',
          end_date: '2019-01-03',
          office: '448 Russell Senate Office Building',
          phone: '202-224-3353',
          fax: null,
          contact_form:
            'https://www.portman.senate.gov/public/index.cfm/contact?p=contact-form',
          bills_sponsored: 54,
          bills_cosponsored: 226,
          missed_votes_pct: 0.67,
          votes_with_party_pct: 97.48,
          committees: [
            {
              name: 'Joint Economic Committee',
              code: 'JSEC',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/JSEC.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: null,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            },
            {
              name: 'Committee on Energy and Natural Resources',
              code: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSEG.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 11,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFI.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 10,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            },
            {
              name: 'Committee on Foreign Relations',
              code: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFR.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 10,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            },
            {
              name: 'Committee on Homeland Security and Governmental Affairs',
              code: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSGA.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 3,
              begin_date: '2017-01-03',
              end_date: '2019-01-03'
            }
          ],
          subcommittees: [
            {
              name: 'Health Care',
              code: 'SSFI10',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFI/subcommittees/SSFI10.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 8,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Social Security, Pensions, and Family Policy',
              code: 'SSFI02',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFI/subcommittees/SSFI02.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 2,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Taxation and IRS Oversight',
              code: 'SSFI11',
              parent_committee_id: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFI/subcommittees/SSFI11.json',
              side: 'majority',
              title: 'Chair',
              rank_in_party: 1,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Europe and Regional Security Cooperation Subcommittee',
              code: 'SSFR01',
              parent_committee_id: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFR/subcommittees/SSFR01.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 4,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name:
                'Multilateral International Development, Multilateral Institutions, and International Economic, Energy, and Environmental Policy',
              code: 'SSFR15',
              parent_committee_id: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFR/subcommittees/SSFR15.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 5,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Near East, South Asia, Central Asia, and Counterterrorism',
              code: 'SSFR07',
              parent_committee_id: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFR/subcommittees/SSFR07.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 5,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name:
                'State Department and USAID Management, International Operations, and Bilateral International Development',
              code: 'SSFR14',
              parent_committee_id: 'SSFR',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSFR/subcommittees/SSFR14.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 4,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Energy Subcommittee',
              code: 'SSEG01',
              parent_committee_id: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSEG/subcommittees/SSEG01.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 8,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'National Parks Subcommittee',
              code: 'SSEG04',
              parent_committee_id: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSEG/subcommittees/SSEG04.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 7,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Permanent Subcommittee on Investigations',
              code: 'SSGA01',
              parent_committee_id: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSGA/subcommittees/SSGA01.json',
              side: 'majority',
              title: 'Chair',
              rank_in_party: 1,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Regulatory Affairs and Federal Management Subcommittee',
              code: 'SSGA19',
              parent_committee_id: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSGA/subcommittees/SSGA19.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 3,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name: 'Water and Power Subcommittee',
              code: 'SSEG07',
              parent_committee_id: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/115/senate/committees/SSEG/subcommittees/SSEG07.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 6,
              begin_date: '',
              end_date: '2019-01-03'
            }
          ]
        },
        {
          congress: '114',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: 'H4OH02032',
          seniority: '5',
          senate_class: '3',
          state_rank: '',
          lis_id: 'S349',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2015-01-06',
          end_date: '2017-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 61,
          bills_cosponsored: 213,
          missed_votes_pct: 1.39,
          votes_with_party_pct: 84.65,
          committees: [
            {
              name: 'Committee on Energy and Natural Resources',
              code: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/114/senate/committees/SSEG.json',
              rank_in_party: null,
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/114/senate/committees/SSFI.json',
              rank_in_party: null,
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Homeland Security and Governmental Affairs',
              code: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/114/senate/committees/SSGA.json',
              rank_in_party: null,
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on the Budget',
              code: 'SSBU',
              api_uri:
                'https://api.propublica.org/congress/v1/114/senate/committees/SSBU.json',
              rank_in_party: null,
              begin_date: '',
              end_date: '2017-01-03'
            }
          ],
          subcommittees: []
        },
        {
          congress: '113',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '3',
          senate_class: '3',
          state_rank: '',
          lis_id: 'S349',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2013-01-03',
          end_date: '2015-01-02',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 34,
          bills_cosponsored: 241,
          missed_votes_pct: 2.28,
          votes_with_party_pct: 88.47,
          committees: [
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSFI.json',
              rank_in_party: 10,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on the Budget',
              code: 'SSBU',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSBU.json',
              rank_in_party: 6,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Energy and Natural Resources',
              code: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSEG.json',
              rank_in_party: 9,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Homeland Security and Governmental Affairs',
              code: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSGA.json',
              rank_in_party: 4,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            }
          ],
          subcommittees: [
            {
              name:
                'Subcommittee on Federal Financial Management, Government Information, Federal Services, and International Security',
              code: 'SSGA09',
              parent_committee_id: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSGA/subcommittees/SSGA09.json',
              rank_in_party: 4,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Energy Subcommittee',
              code: 'SSEG01',
              parent_committee_id: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSEG/subcommittees/SSEG01.json',
              rank_in_party: 4,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'National Parks Subcommittee',
              code: 'SSEG04',
              parent_committee_id: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSEG/subcommittees/SSEG04.json',
              rank_in_party: 2,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Public Lands, Forests, and Mining Subcommittee',
              code: 'SSEG03',
              parent_committee_id: 'SSEG',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSEG/subcommittees/SSEG03.json',
              rank_in_party: 4,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Ad Hoc Subcommittee on Contracting Oversight',
              code: 'SSGA13',
              parent_committee_id: 'SSGA',
              api_uri:
                'https://api.propublica.org/congress/v1/113/senate/committees/SSGA/subcommittees/SSGA13.json',
              rank_in_party: 1,
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            }
          ]
        },
        {
          congress: '112',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          short_title: 'Sen.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '1',
          senate_class: '3',
          state_rank: '',
          lis_id: 'S349',
          ocd_id: 'ocd-division/country:us/state:oh',
          start_date: '2011-01-05',
          end_date: '2013-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 20,
          bills_cosponsored: 164,
          missed_votes_pct: 1.03,
          votes_with_party_pct: 90.02,
          committees: [],
          subcommittees: []
        },
        {
          congress: '109',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '14',
          district: '2',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:2',
          start_date: '2005-01-04',
          end_date: '2007-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 3,
          bills_cosponsored: 16,
          missed_votes_pct: 9.33,
          votes_with_party_pct: 97.06,
          committees: [],
          subcommittees: []
        },
        {
          congress: '108',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '12',
          district: '2',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:2',
          start_date: '2003-01-07',
          end_date: '2005-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 16,
          bills_cosponsored: 95,
          missed_votes_pct: 3.36,
          votes_with_party_pct: 96.53,
          committees: [],
          subcommittees: []
        },
        {
          congress: '107',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '10',
          district: '2',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:2',
          start_date: '2001-01-03',
          end_date: '2003-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 22,
          bills_cosponsored: 128,
          missed_votes_pct: 2.61,
          votes_with_party_pct: 96.29,
          committees: [],
          subcommittees: []
        },
        {
          congress: '106',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '8',
          district: '2',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:2',
          start_date: '1999-01-06',
          end_date: '2001-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 17,
          bills_cosponsored: 144,
          missed_votes_pct: 1.32,
          votes_with_party_pct: 90.65,
          committees: [],
          subcommittees: []
        },
        {
          congress: '105',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '6',
          district: '2',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:2',
          start_date: '1997-01-07',
          end_date: '1999-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 13,
          bills_cosponsored: 125,
          missed_votes_pct: 2.44,
          votes_with_party_pct: 90.5,
          committees: [],
          subcommittees: []
        },
        {
          congress: '104',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '4',
          district: '2',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:2',
          start_date: '1995-01-04',
          end_date: '1997-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 8,
          bills_cosponsored: 99,
          missed_votes_pct: 2.16,
          votes_with_party_pct: 90.62,
          committees: [],
          subcommittees: []
        },
        {
          congress: '103',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: '',
          seniority: '2',
          district: '2',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:2',
          start_date: '1993-01-05',
          end_date: '1995-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 7,
          bills_cosponsored: 164,
          missed_votes_pct: 3.19,
          votes_with_party_pct: 89.15,
          committees: [],
          subcommittees: []
        }
      ],
      photoUrl:
        'https://theunitedstates.io/images/congress/450x550/P000449.jpg',
      smallPhotoUrl:
        'https://theunitedstates.io/images/congress/225x275/P000449.jpg',
      topContributors: [
        {
          org_name: 'Votesane PAC',
          total: '207500',
          pacs: '0',
          indivs: '207500'
        },
        {
          org_name: 'Goldman Sachs',
          total: '165000',
          pacs: '9500',
          indivs: '155500'
        },
        {
          org_name: 'Citigroup Inc',
          total: '110750',
          pacs: '9000',
          indivs: '101750'
        },
        {
          org_name: 'General Electric',
          total: '96200',
          pacs: '10000',
          indivs: '86200'
        },
        {
          org_name: 'Fidelity Investments',
          total: '93100',
          pacs: '0',
          indivs: '93100'
        },
        {
          org_name: 'Procter & Gamble',
          total: '84485',
          pacs: '12500',
          indivs: '71985'
        },
        {
          org_name: 'Marathon Petroleum',
          total: '84235',
          pacs: '10000',
          indivs: '74235'
        },
        {
          org_name: 'JPMorgan Chase & Co',
          total: '80650',
          pacs: '10000',
          indivs: '70650'
        },
        {
          org_name: 'Sullivan & Cromwell',
          total: '69050',
          pacs: '0',
          indivs: '69050'
        },
        {
          org_name: 'Apple Inc',
          total: '63500',
          pacs: '0',
          indivs: '63500'
        }
      ],
      topIndustries: [
        {
          industry_code: 'F07',
          industry_name: 'Securities & Investment',
          indivs: '2499540',
          pacs: '242500',
          total: '2742040'
        },
        {
          industry_code: 'W06',
          industry_name: 'Retired',
          indivs: '1849856',
          pacs: '0',
          total: '1849856'
        },
        {
          industry_code: 'F10',
          industry_name: 'Real Estate',
          indivs: '1057212',
          pacs: '110700',
          total: '1167912'
        },
        {
          industry_code: 'K01',
          industry_name: 'Lawyers/Law Firms',
          indivs: '935852',
          pacs: '227150',
          total: '1163002'
        },
        {
          industry_code: 'F09',
          industry_name: 'Insurance',
          indivs: '597199',
          pacs: '476575',
          total: '1073774'
        },
        {
          industry_code: 'N15',
          industry_name: 'Misc Manufacturing & Distributing',
          indivs: '666951',
          pacs: '189582',
          total: '856533'
        },
        {
          industry_code: 'Q03',
          industry_name: 'Leadership PACs',
          indivs: '15030',
          pacs: '710906',
          total: '725936'
        },
        {
          industry_code: 'K02',
          industry_name: 'Lobbyists',
          indivs: '708697',
          pacs: '13884',
          total: '722581'
        },
        {
          industry_code: 'F13',
          industry_name: 'Misc Finance',
          indivs: '554350',
          pacs: '85000',
          total: '639350'
        },
        {
          industry_code: 'H04',
          industry_name: 'Pharmaceuticals/Health Products',
          indivs: '247806',
          pacs: '374249',
          total: '622055'
        }
      ],
      contributionTotals: {
        total_donations: '26328525.06',
        spent: '26767979.34',
        cash_on_hand: '1662654.85'
      }
    },
    {
      member_id: 'D000626',
      first_name: 'Warren',
      middle_name: null,
      last_name: 'Davidson',
      suffix: null,
      date_of_birth: '1970-03-01',
      gender: 'M',
      url: 'https://davidson.house.gov',
      times_topics_url: '',
      times_tag: '',
      govtrack_id: '412675',
      cspan_id: '102555',
      votesmart_id: '166760',
      icpsr_id: '21564',
      twitter_account: 'WarrenDavidson',
      facebook_account: 'CongressmanWarrenDavidson',
      youtube_account: null,
      crp_id: 'N00038767',
      google_entity_id: '/g/11cmmch3q8',
      rss_url: '',
      in_office: true,
      current_party: 'R',
      most_recent_vote: '2019-07-25',
      last_updated: '2019-08-20 10:30:21 -0400',
      roles: [
        {
          congress: '116',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: 'H6OH08315',
          seniority: '6',
          district: '8',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:8',
          start_date: '2019-01-03',
          end_date: '2021-01-03',
          office: '1107 Longworth House Office Building',
          phone: '202-225-6205',
          fax: null,
          contact_form: null,
          bills_sponsored: 8,
          bills_cosponsored: 62,
          missed_votes_pct: 2.55,
          votes_with_party_pct: 82.06,
          committees: [
            {
              name: 'Committee on Financial Services',
              code: 'HSBA',
              api_uri:
                'https://api.propublica.org/congress/v1/116/house/committees/HSBA.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 18,
              begin_date: '2019-01-23',
              end_date: '2021-01-03'
            }
          ],
          subcommittees: [
            {
              name: 'Oversight and Investigations',
              code: 'HSBA09',
              parent_committee_id: 'HSBA',
              api_uri:
                'https://api.propublica.org/congress/v1/116/house/committees/HSBA/subcommittees/HSBA09.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 5,
              begin_date: '',
              end_date: '2021-01-03'
            },
            {
              name:
                'Investor Protection, Entrepreneurship, and Capital Markets',
              code: 'HSBA16',
              parent_committee_id: 'HSBA',
              api_uri:
                'https://api.propublica.org/congress/v1/116/house/committees/HSBA/subcommittees/HSBA16.json',
              side: 'minority',
              title: 'Member',
              rank_in_party: 9,
              begin_date: '',
              end_date: '2021-01-03'
            }
          ]
        },
        {
          congress: '115',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: 'H6OH08315',
          seniority: '4',
          district: '8',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:8',
          start_date: '2017-01-03',
          end_date: '2019-01-03',
          office: '1004 Longworth House Office Building',
          phone: '202-225-6205',
          fax: null,
          contact_form: null,
          bills_sponsored: 15,
          bills_cosponsored: 119,
          missed_votes_pct: 0.91,
          votes_with_party_pct: 94.23,
          committees: [
            {
              name: 'Committee on Financial Services',
              code: 'HSBA',
              api_uri:
                'https://api.propublica.org/congress/v1/115/house/committees/HSBA.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 30,
              begin_date: '',
              end_date: '2019-01-03'
            }
          ],
          subcommittees: [
            {
              name:
                'National Security, International Development, and Monetary Policy',
              code: 'HSBA01',
              parent_committee_id: 'HSBA',
              api_uri:
                'https://api.propublica.org/congress/v1/115/house/committees/HSBA/subcommittees/HSBA01.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 12,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name:
                'Investor Protection, Entrepreneurship, and Capital Markets',
              code: 'HSBA16',
              parent_committee_id: 'HSBA',
              api_uri:
                'https://api.propublica.org/congress/v1/115/house/committees/HSBA/subcommittees/HSBA16.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 14,
              begin_date: '',
              end_date: '2019-01-03'
            },
            {
              name:
                'National Security, International Development and Monetary Policy',
              code: 'HSBA20',
              parent_committee_id: 'HSBA',
              api_uri:
                'https://api.propublica.org/congress/v1/115/house/committees/HSBA/subcommittees/HSBA20.json',
              side: 'majority',
              title: 'Member',
              rank_in_party: 10,
              begin_date: '',
              end_date: '2019-01-03'
            }
          ]
        },
        {
          congress: '114',
          chamber: 'House',
          title: 'Representative',
          short_title: 'Rep.',
          state: 'OH',
          party: 'R',
          leadership_role: null,
          fec_candidate_id: 'H6OH08315',
          seniority: '2',
          district: '8',
          at_large: false,
          ocd_id: 'ocd-division/country:us/state:oh/cd:8',
          start_date: '2016-06-09',
          end_date: '2017-01-03',
          office: null,
          phone: null,
          fax: null,
          contact_form: null,
          bills_sponsored: 2,
          bills_cosponsored: 0,
          missed_votes_pct: 0.59,
          votes_with_party_pct: 93.45,
          committees: [],
          subcommittees: []
        }
      ],
      photoUrl:
        'https://theunitedstates.io/images/congress/450x550/D000626.jpg',
      smallPhotoUrl:
        'https://theunitedstates.io/images/congress/225x275/D000626.jpg',
      topContributors: [
        {
          org_name: 'House Freedom Fund',
          total: '30135',
          pacs: '6135',
          indivs: '24000'
        },
        {
          org_name: 'Integral Manufacturing',
          total: '13010',
          pacs: '0',
          indivs: '13010'
        },
        {
          org_name: 'American Bankers Assn',
          total: '10000',
          pacs: '10000',
          indivs: '0'
        },
        {
          org_name: 'Building Leadership & Inspiring New Enterprise',
          total: '10000',
          pacs: '10000',
          indivs: '0'
        },
        {
          org_name: 'Entertrainment Junction',
          total: '10000',
          pacs: '0',
          indivs: '10000'
        },
        {
          org_name: 'Ernst & Young',
          total: '10000',
          pacs: '10000',
          indivs: '0'
        },
        {
          org_name: 'Majority Cmte PAC',
          total: '10000',
          pacs: '10000',
          indivs: '0'
        },
        {
          org_name: 'National Auto Dealers Assn',
          total: '10000',
          pacs: '10000',
          indivs: '0'
        },
        {
          org_name: 'Credit Union National Assn',
          total: '8500',
          pacs: '8500',
          indivs: '0'
        },
        {
          org_name: 'Mortgage Bankers Assn',
          total: '8500',
          pacs: '8500',
          indivs: '0'
        }
      ],
      topIndustries: [
        {
          industry_code: 'F09',
          industry_name: 'Insurance',
          indivs: '8250',
          pacs: '59500',
          total: '67750'
        },
        {
          industry_code: 'Q03',
          industry_name: 'Leadership PACs',
          indivs: '24000',
          pacs: '40635',
          total: '64635'
        },
        {
          industry_code: 'F07',
          industry_name: 'Securities & Investment',
          indivs: '10800',
          pacs: '52000',
          total: '62800'
        },
        {
          industry_code: 'F03',
          industry_name: 'Commercial Banks',
          indivs: '550',
          pacs: '58500',
          total: '59050'
        },
        {
          industry_code: 'W06',
          industry_name: 'Retired',
          indivs: '47994',
          pacs: '0',
          total: '47994'
        },
        {
          industry_code: 'F11',
          industry_name: 'Accountants',
          indivs: '1910',
          pacs: '31000',
          total: '32910'
        },
        {
          industry_code: 'F10',
          industry_name: 'Real Estate',
          indivs: '3700',
          pacs: '20500',
          total: '24200'
        },
        {
          industry_code: 'F06',
          industry_name: 'Finance/Credit Companies',
          indivs: '5400',
          pacs: '18000',
          total: '23400'
        },
        {
          industry_code: 'N15',
          industry_name: 'Misc Manufacturing & Distributing',
          indivs: '9200',
          pacs: '11999',
          total: '21199'
        },
        {
          industry_code: 'K02',
          industry_name: 'Lobbyists',
          indivs: '19090',
          pacs: '0',
          total: '19090'
        }
      ],
      contributionTotals: {
        total_donations: '663970.46',
        spent: '544835.09',
        cash_on_hand: '230007.51'
      }
    }
  ],
  state: 'oh',
  district: '8'
};

module.exports = expectedResponse;
