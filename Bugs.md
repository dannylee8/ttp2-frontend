Error: stock purchases were not being saved in the database
Fix: in handleSubmit() state was being cleared of ticker and quantity before the this.placeOrder() was called with ticker and quantity as arguments

Error: form was not being cleared if the stock ticker symbol was invalid
Fix: clear state (:ticker, :quantity) in the .catch block of handleSubmit()

Error: The App.js getUserStocks() takes a long time load data from API and calculate.
Fix: Add a loading state, and an indicator, turn it off once the data populates.  Conditionally render an opacity overlay on the page based on value of "loading" in state.  Same for the spinner.

Error: If portofolio is empty, App.js still tries to get list of Stocks from IEX, causing a 400 error
Fix: Add a check to make sure there are symbols in the 'symbolList', otherwise skip axios.get

Error: If order fails to go through, money is still subtracted.
Fix:  Move User balance update fetch PATCH call inside .then of the stock fetch POST generating the stock object

Error: When making purchase, openPrice is undefined.
NoFix: Not ideal - but this is expected because openPrice is calculated on Load.

Error: Order is added to database but does not show up in portfolio if stock already exists in portfolio.
Missed Feature: Only shows a symbol once even if there are multiple orders.

