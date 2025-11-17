 const dogs=[]
    for (let i = 1; i <= 6; i++) {
        const name = prompt(`Enter the name of dog ${i}:`);
        if (name) {
        dogs.push(name.trim());
      }
    }
    dogs.sort().reverse()
    const list = document.getElementById("dogList");
     for (const dog of dogs) {
      const li = document.createElement("li");
      li.textContent = dog;
      list.appendChild(li);
    }