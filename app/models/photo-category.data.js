// photocategorydata
module.exports = function PhotoCategoryData(category) {
    'use strict'

    // Helper Functions:
    const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)
    // Constants:
    const categoryTitle = capitalizeFirstLetter(category)


    // Models:
    const pools = {
        images: [
            'residential-pool-by-sun-ray-pools-001',
            'residential-pool-by-sun-ray-pools-002',
            'residential-pool-by-sun-ray-pools-003',
            'residential-pool-by-sun-ray-pools-004',
            'residential-pool-by-sun-ray-pools-005',
            'residential-pool-by-sun-ray-pools-006',
            //'residential-pool-by-sun-ray-pools-007',
            'residential-pool-by-sun-ray-pools-008',
            'residential-pool-by-sun-ray-pools-009',
            'residential-pool-by-sun-ray-pools-010',
            //'residential-pool-by-sun-ray-pools-011',
            'residential-pool-by-sun-ray-pools-012',
            'residential-pool-by-sun-ray-pools-013',
            'residential-pool-by-sun-ray-pools-014',
            //'residential-pool-by-sun-ray-pools-015',
            'residential-pool-by-sun-ray-pools-016',
            'residential-pool-by-sun-ray-pools-017',
            'residential-pool-by-sun-ray-pools-018',
            //'residential-pool-by-sun-ray-pools-019',
            'residential-pool-by-sun-ray-pools-020',
            'residential-pool-by-sun-ray-pools-021',
            'residential-pool-by-sun-ray-pools-022',
            'residential-pool-by-sun-ray-pools-023',
            //'residential-pool-by-sun-ray-pools-024',
            'residential-pool-by-sun-ray-pools-025',
            'residential-pool-by-sun-ray-pools-026',
            'residential-pool-by-sun-ray-pools-027',
            //'residential-pool-by-sun-ray-pools-028',
            'residential-pool-by-sun-ray-pools-029',
            'residential-pool-by-sun-ray-pools-030',
            'residential-pool-by-sun-ray-pools-031',
            'residential-pool-by-sun-ray-pools-032',
            'residential-pool-by-sun-ray-pools-033',
            'residential-pool-by-sun-ray-pools-034',
            'residential-pool-by-sun-ray-pools-035',
            'residential-pool-by-sun-ray-pools-036',
            'residential-pool-by-sun-ray-pools-037',
            'residential-pool-by-sun-ray-pools-038',
            'residential-pool-by-sun-ray-pools-039'
        ]
    }

    const spas = {
        images: [
            'spa-by-sun-ray-pools-001',
            'spa-by-sun-ray-pools-002',
            'spa-by-sun-ray-pools-003',
            'spa-by-sun-ray-pools-004',
            'spa-by-sun-ray-pools-005',
            'spa-by-sun-ray-pools-006',
            'spa-by-sun-ray-pools-007',
            'spa-by-sun-ray-pools-008',
            'spa-by-sun-ray-pools-009',
            'spa-by-sun-ray-pools-010',
            'spa-by-sun-ray-pools-011',
            'spa-by-sun-ray-pools-012',
            'spa-by-sun-ray-pools-013',
            'spa-by-sun-ray-pools-014',
            'spa-by-sun-ray-pools-015'

        ]
    }

    const decks = {
        images: [
            'deck-by-sun-ray-pools-001',
            'deck-by-sun-ray-pools-002',
            'deck-by-sun-ray-pools-003',
            'deck-by-sun-ray-pools-004',
            'deck-by-sun-ray-pools-005',
            'deck-by-sun-ray-pools-006',
            'deck-by-sun-ray-pools-007',
            'deck-by-sun-ray-pools-008',
            'deck-by-sun-ray-pools-009',
            'deck-by-sun-ray-pools-010',
            'deck-by-sun-ray-pools-011',
            'deck-by-sun-ray-pools-012'

        ]
    }

    const waterfalls = {
        images: [
            'waterfall-by-sun-ray-pools-001',
            'waterfall-by-sun-ray-pools-002',
            'waterfall-by-sun-ray-pools-003',
            'waterfall-by-sun-ray-pools-004',
            'waterfall-by-sun-ray-pools-005',
            'waterfall-by-sun-ray-pools-006',
            'waterfall-by-sun-ray-pools-007',
            'waterfall-by-sun-ray-pools-008',
            'waterfall-by-sun-ray-pools-009',
            'waterfall-by-sun-ray-pools-010',
            'waterfall-by-sun-ray-pools-011',
            'waterfall-by-sun-ray-pools-012',
            'waterfall-by-sun-ray-pools-013',
            'waterfall-by-sun-ray-pools-014',
            'waterfall-by-sun-ray-pools-015',
            'waterfall-by-sun-ray-pools-016',
            'waterfall-by-sun-ray-pools-017',
            'waterfall-by-sun-ray-pools-018',
            'waterfall-by-sun-ray-pools-019',
            'waterfall-by-sun-ray-pools-020'
        ]
    }

    const kitchens = {
        images: [
            'kitchens-by-sun-ray-pools-001',
            'kitchens-by-sun-ray-pools-002',
            'kitchens-by-sun-ray-pools-003',
            'kitchens-by-sun-ray-pools-004'

        ]
    }


    // Business Logic:

    function renderCategory(category) {
        if(category === 'pools') return pools
        else if(category === 'spas') return spas
        else if(category === 'decks') return decks
        else if(category === 'waterfalls') return waterfalls
        else if(category === 'kitchens') return kitchens
        else return 404
    }


    // Injected Content:
    this.title = `${categoryTitle} Photos`
    this.url = category
    this.category = renderCategory(category)

}
