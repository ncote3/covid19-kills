export default function formatRegion(region) {
    let formattedRegion;

    if (region === 'northAmerica') {
        formattedRegion = 'North America';
    } else if (region === 'oceania') {
        formattedRegion = 'Oceania';
    } else if (region === 'middleEast') {
        formattedRegion = 'Middle East';
    } else if (region === 'asia') {
        formattedRegion = 'Asia';
    } else if (region === 'caribbean') {
        formattedRegion = 'Caribbean';
    } else if (region === 'southAmerica') {
        formattedRegion = 'South America';
    } else if (region === 'africa') {
        formattedRegion = 'Africa';
    } else if (region === 'europe') {
        formattedRegion = 'Europe';
    } else if (region === 'other') {
        formattedRegion = 'Other';
    }

    return formattedRegion;
}
