// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

	if (currency<=0 )
	{
		return {};
		}
		else if (currency>=10000 )
		{
			return {error: "You are rich, my friend! We don\'t have so much coins for exchange"};
		}
		else 
		{	var res= {};
			var x = currency;
			if ((x/50) >=1) {
			res['H'] = Math.floor(x/50);
			x = x %50;
			}
			if ((x/25) >=1) {
			res['Q'] = Math.floor(x/25);
			x = x % 25;
			}
			if ((x/10) >= 1 ) {
			res['D'] = Math.floor(x/10);
			x = x % 10;
			} 
			if ((x/5) >= 1) {
			res['N'] = Math.floor(x/5);
			x = x % 5 ;
			} 
			if (x>=1){
			res['P']=x;
			}

			
			return res;
		}

}
