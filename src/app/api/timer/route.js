export async function GET() {
	
	const START_COUNT = 1999999999;
	
	const TIMER_START_TIMESTAMP = 1704067200000; 
  
	const now = Date.now();

	const remainingTime = Math.max(0, START_COUNT - Math.floor((now - TIMER_START_TIMESTAMP) / 1000));
  
	return new Response(JSON.stringify({ remainingTime }), {
	  status: 200,
	  headers: { 'Content-Type': 'application/json' },
	});
}