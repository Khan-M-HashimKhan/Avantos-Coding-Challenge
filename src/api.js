export async function getGraph() {
    const url = 'http://localhost:3001/api/v1/123/actions/blueprints/bp_456/bpv_123/graph';
    const options = {method: 'GET', headers: {Accept: 'application/json, application/problem+json'}};

    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
        const errBody = await response.text();
        throw new Error(`Error fetching graph: ${response.status} ${errBody}`);
    }

    console.log('Response:', response);
    console.log('Data:', data);
    return data;

}