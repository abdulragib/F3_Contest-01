
const ApiCall = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    const data = await response.json()
    return data
}


const showData = (data) => {
  data.then(
    (item) => {
        item.forEach((value) => {
        const {name, image, symbol, current_price, price_change_percentage_24h, market_cap, total_volume} = value

        const table = document.getElementById('table')
        const row = document.createElement('tr');
        row.innerHTML = ` 
            <td><img src="${image}" width="20px" height="20px"/> <p id="name">${name}</p></td>
            <td>${symbol.toUpperCase()}</td>
            <td>$${current_price.toLocaleString('en-US')}</td>
            <td>Mkt Cap: $${total_volume.toLocaleString('en-US')}</td>
            <td class="percentage">$${price_change_percentage_24h}</td>
            <td>$${market_cap.toLocaleString('en-US')}</td>
        `

        table.appendChild(row)
        })

        const collection = document.getElementsByClassName("percentage");
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].innerHTML.includes("-"))
            {
                collection[i].style.color = "red";
            }
            else{
                collection[i].style.color = "green";
            }
        }
        
    }
  )
}


const ApiData = ApiCall()
showData(ApiData)
