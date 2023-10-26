function displayAlternatives(alternatives) {
    var alternativesTable = document.getElementById("alternatives");

    var table = document.createElement("table");
    table.className = "table table-bordered"; // Tambahkan kelas CSS kustom
    table.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh tabel

    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    // Membuat header untuk kolom "name"
    var nameHeader = document.createElement("th");
    nameHeader.textContent = "Alternatif";
    nameHeader.className = "text-center"; // Tengahkan teks
    nameHeader.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
    nameHeader.style.color = "#E9967A"; // Atur warna teks
    nameHeader.colSpan = 2; // Gabungkan dua kolom
    headerRow.appendChild(nameHeader);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");

    alternatives.forEach(function(alternative) {
        var row = document.createElement("tr");

        // Kolom "A+id"
        var idCell = document.createElement("td");
        idCell.textContent = "A" + alternative.id_alternative;
        idCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        idCell.style.color = "#E9967A"; // Atur warna teks
        idCell.style.textAlign = "center"; // Pusatkan teks
        row.appendChild(idCell);

        // Kolom "name"
        var nameCell = document.createElement("td");
        nameCell.textContent = alternative.name;
        nameCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        nameCell.style.color = "#E9967A"; // Atur warna teks
        nameCell.style.textAlign = "center"; // Pusatkan teks
        row.appendChild(nameCell);

        tbody.appendChild(row);
    });

    var heading = document.createElement("h3");
    heading.textContent = "Alternatif";
    heading.style.color = "#E9967A"; // Ganti warna font
    heading.style.textAlign = "center"; // Pusatkan teks
    heading.className = "mb-3"; // Tambahkan kelas CSS kustom

    table.appendChild(tbody);
    alternativesTable.appendChild(heading);
    alternativesTable.appendChild(table);
}

function displayCriterias(criterias) {
    // Mencari elemen dengan ID "criterias"
    var criteriasTable = document.getElementById("criterias");

    // Membuat elemen tabel
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Tambahkan kelas CSS kustom
    table.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh tabel

    // Membuat elemen thead untuk header tabel
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    // Membuat kolom-kolom header
    var headerColumns = ["Kriteria", "Deskripsi", "Bobot"];
    headerColumns.forEach(function(columnText) {
        var headerCell = document.createElement("th");
        headerCell.textContent = columnText;
        headerCell.className = "text-center"; // Tengahkan teks
        headerCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        headerCell.style.color = "#E9967A"; // Atur warna teks
        headerRow.appendChild(headerCell);
    });

    // Menambahkan headerRow ke thead
    thead.appendChild(headerRow);

    // Menambahkan thead ke tabel
    table.appendChild(thead);

    // Membuat elemen tbody untuk isi tabel
    var tbody = document.createElement("tbody");

    // Iterasi melalui kriteria dan membuat baris untuk masing-masing kriteria
    criterias.forEach(function(criteria) {
        var row = document.createElement("tr");

        // Menambahkan kolom-kolom data
        var idCell = document.createElement("td");
        idCell.textContent = "C" + criteria.id_criteria;
        idCell.className = "text-center"; // Tengahkan teks
        idCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        idCell.style.color = "#E9967A"; // Atur warna teks
        var criteriaCell = document.createElement("td");
        criteriaCell.textContent = criteria.criteria;
        criteriaCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        criteriaCell.style.color = "#E9967A"; // Atur warna teks
        var weightCell = document.createElement("td");
        weightCell.textContent = criteria.weight;
        weightCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        weightCell.style.color = "#E9967A"; // Atur warna teks

        // Menambahkan semua sel ke dalam baris
        row.appendChild(idCell);
        row.appendChild(criteriaCell);
        row.appendChild(weightCell);

        // Menambahkan baris ke dalam tbody
        tbody.appendChild(row);
    });

    // Menambahkan tbody ke dalam tabel
    table.appendChild(tbody);

    // Membuat elemen h3 untuk judul tabel
    var heading = document.createElement("h3");
    heading.textContent = "Kriteria";
    heading.style.color = "#E9967A"; // Ganti warna font
    heading.style.textAlign = "center"; // Pusatkan teks
    heading.className = "mb-3"; // Tambahkan kelas CSS kustom

    // Menambahkan tabel ke dalam elemen dengan ID "criterias"
    criteriasTable.appendChild(heading);
    criteriasTable.appendChild(table);
}

function displayResultN(n) {
    var element = document.getElementById("n");
    element.innerHTML += '<h4 class="text-center m-0" style="color: #E9967A;">' + n + ' Kriteria</h3>';
}

function displayResultM(m) {
    var element = document.getElementById("m");
    element.innerHTML += '<h4 class="text-center m-0" style="color: #E9967A;">' + m + ' Alternatif</h3>';
}

function displayResultX(x) {
    var element = document.getElementById("x");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Perbandingan Berpasangan";
    heading.style.color = "#E9967A"; // Change font color
    heading.className = "mb-3 text-center"; // Add a custom CSS class

    // Create the table element with custom styles
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Add a custom CSS class

    // Create the "Alternatif" cell
    var altCell = document.createElement("th");
    altCell.textContent = "Alternatif";
    altCell.rowSpan = 2;
    altCell.classList.add("text-center");
    altCell.style.color = "#E9967A";
    altCell.style.border = "2px solid #F0F8FF"; // Add border to Alternatif cell

    // Create the table header row for "Category" with a colspan matching the number of criteria (C)
    var categoryRow = document.createElement("tr");
    var categoryCell = document.createElement("th");
    categoryCell.textContent = "Kriteria";
    categoryCell.colSpan = Object.keys(x[1]).length;
    categoryCell.classList.add("text-center");
    categoryCell.style.color = "#E9967A"; // Change font color
    categoryCell.style.border = "2px solid #F0F8FF"; // Change border color

    categoryRow.appendChild(altCell);
    categoryRow.appendChild(categoryCell);
    table.appendChild(categoryRow);

    // Create the table header row for criteria names (C1, C2, C3, etc.)
    var headerRow = document.createElement("tr");
    for (var criterion in x[1]) {
        var headerCell = document.createElement("th");
        headerCell.textContent = "C" + criterion;
        headerCell.classList.add("text-center");
        headerCell.style.color = "#E9967A"; // Change font color
        headerCell.style.border = "2px solid #F0F8FF"; // Change border color
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    // Iterate through the matrix and add rows for each alternative and criteria values
    for (var alternative in x) {
        var row = document.createElement("tr");
        altCell = document.createElement("td");
        altCell.innerHTML = "<b>A" + alternative + "</b>";
        altCell.classList.add("text-center");
        altCell.style.color = "#E9967A"; // Change font color
        altCell.style.border = "2px solid #F0F8FF"; // Add border to Alternatif cell
        row.appendChild(altCell);

        for (var value in x[alternative]) {
            var cell = document.createElement("td");
            cell.textContent = x[alternative][value];
            cell.classList.add("text-center");
            cell.style.color = "#E9967A"; // Change font color
            cell.style.border = "2px solid #F0F8FF"; // Change border color
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Append the heading and table to the element with ID "result"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultX_Rata(x_rata) {
    var element = document.getElementById("x_rata");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Rata-rata Perbandingan Berpasangan";
    heading.style.color = "#E9967A"; // Change font color
    heading.classList.add("mb-3", "text-center"); // Add custom CSS classes

    // Create a table element
    var table = document.createElement("table");
    table.className = "table table-bordered";
    table.style.color = "#E9967A"; // Set the font color
    table.classList.add("text-center"); // Add text-center class

    // Create the table header row
    var headerRow = document.createElement("tr");
    var headerCell1 = document.createElement("th");
    var headerCell2 = document.createElement("th");
    headerCell1.textContent = "Alternatif";
    headerCell2.textContent = "Rata-rata";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    table.appendChild(headerRow);

    // Iterate through the x_rata object and add rows for each alternative and their average values
    for (var key in x_rata) {
        var row = document.createElement("tr");
        var altCell = document.createElement("td");
        var valueCell = document.createElement("td");
        altCell.textContent = "A" + key;
        altCell.style.fontWeight = "bold"; // Make it bold
        valueCell.textContent = x_rata[key];
        row.appendChild(altCell);
        row.appendChild(valueCell);
        table.appendChild(row);
    }

    // Style rows and cells with borders
    var rows = table.querySelectorAll("tr");
    rows.forEach(function(row) {
        row.style.border = "2px solid #F0F8FF"; // Add borders to rows

        var cells = row.querySelectorAll("td, th");
        cells.forEach(function(cell) {
            cell.style.border = "2px solid #F0F8FF"; // Add borders to cells
        });
    });

    // Append the heading and table to the element with ID "x_rata"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultR(r) {
    var element = document.getElementById("r");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Perbandingan Berpasangan Ternormalisasi";
    heading.style.color = "#E9967A"; // Change font color
    heading.className = "mb-3 text-center"; // Add a custom CSS class

    // Create the table element with custom styles
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Add a custom CSS class

    // Create the "Alternatif" cell
    var altCell = document.createElement("th");
    altCell.textContent = "Alternatif";
    altCell.rowSpan = 2;
    altCell.classList.add("text-center");
    altCell.style.color = "#E9967A";
    altCell.style.border = "2px solid #F0F8FF"; // Add border to Alternatif cell

    // Create the table header row for "Category" with a colspan matching the number of criteria (C)
    var categoryRow = document.createElement("tr");
    var categoryCell = document.createElement("th");
    categoryCell.textContent = "Kriteria";
    categoryCell.colSpan = Object.keys(r[1]).length;
    categoryCell.classList.add("text-center");
    categoryCell.style.color = "#E9967A"; // Change font color
    categoryCell.style.border = "2px solid #F0F8FF"; // Change border color

    categoryRow.appendChild(altCell);
    categoryRow.appendChild(categoryCell);
    table.appendChild(categoryRow);

    // Create the table header row for criteria names (C1, C2, C3, etc.)
    var headerRow = document.createElement("tr");
    for (var criterion in r[1]) {
        var headerCell = document.createElement("th");
        headerCell.textContent = "C" + criterion;
        headerCell.classList.add("text-center");
        headerCell.style.color = "#E9967A"; // Change font color
        headerCell.style.border = "2px solid #F0F8FF"; // Change border color
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    // Iterate through the matrix and add rows for each criterion and their comparison values
    for (var criterion in r) {
        var row = document.createElement("tr");
        altCell = document.createElement("td");
        altCell.innerHTML = "<b>A" + criterion + "</b>";
        altCell.classList.add("text-center");
        altCell.style.color = "#E9967A"; // Change font color
        altCell.style.border = "2px solid #F0F8FF"; // Add border to Alternatif cell
        row.appendChild(altCell);

        for (var value in r[criterion]) {
            var cell = document.createElement("td");
            var roundedValue = parseFloat(r[criterion][value]).toFixed(4); // Round to three decimal places
            cell.textContent = roundedValue;
            cell.classList.add("text-center");
            cell.style.color = "#E9967A"; // Change font color
            cell.style.border = "2px solid #F0F8FF"; // Change border color
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Append the heading and table to the element with ID "r"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultCriteria(criteria) {
    var element = document.getElementById("criteria");

    // Create an h3 element for the title
    var title = document.createElement("h3");
    title.textContent = "Bobot tiap-tiap Kriteria";
    title.style.color = "#E9967A"; // Change font color
    title.classList.add("text-center", "mb-3"); // Add custom CSS classes

    // Create a table element
    var table = document.createElement("table");
    table.className = "table table-bordered";
    table.style.border = "2px solid #F0F8FF"; // Add border to the table
    table.style.color = "#E9967A"; // Change font color

    // Create the table header row for the "Bobot Kriteria (W)" row
    var weightHeaderRow = document.createElement("tr");

    // Create the header cell for "Bobot Kriteria (W)"
    var weightHeaderCell = document.createElement("th");
    weightHeaderCell.textContent = "Bobot Kriteria (W)";
    weightHeaderCell.colSpan = Object.keys(criteria).length + 1; // +1 for the "Criteria" column
    weightHeaderCell.classList.add("text-center"); // Add the "text-center" class
    weightHeaderRow.appendChild(weightHeaderCell);

    // Append the "Bobot Kriteria (W)" row to the table
    table.appendChild(weightHeaderRow);

    // Create the table header row
    var headerRow = document.createElement("tr");

    // Create the header cell for "Criteria"
    var criteriaHeaderCell = document.createElement("th");
    criteriaHeaderCell.textContent = "Criteria";
    criteriaHeaderCell.classList.add("text-center"); // Add "text-center" class
    criteriaHeaderCell.style.border = "2px solid #F0F8FF"; // Add border to the cell
    headerRow.appendChild(criteriaHeaderCell);

    // Iterate through the criteria object and create header cells for each criterion
    for (var criterion in criteria) {
        var headerCell = document.createElement("th");
        headerCell.textContent = "C" + criterion;
        headerCell.classList.add("text-center"); // Add "text-center" class
        headerCell.style.border = "2px solid #F0F8FF"; // Add border to the cell
        headerRow.appendChild(headerCell);
    }

    // Append the header row to the table
    table.appendChild(headerRow);

    // Create the data row for "Weight" and its values
    var weightRow = document.createElement("tr");

    // Create the cell for "Weight"
    var weightCell = document.createElement("td");
    weightCell.textContent = "Weight";
    weightCell.style.fontWeight = "bold"; // Make it bold
    weightCell.classList.add("text-center"); // Add "text-center" class
    weightCell.style.border = "2px solid #F0F8FF"; // Add border to the cell
    weightRow.appendChild(weightCell);

    // Iterate through the criteria object and create cells for each criterion's weight
    for (var criterion in criteria) {
        var cell = document.createElement("td");
        cell.textContent = criteria[criterion];
        cell.classList.add("text-center"); // Add "text-center" class
        cell.style.border = "2px solid #F0F8FF"; // Add border to the cell
        weightRow.appendChild(cell);
    }

    // Append the data row to the table
    table.appendChild(weightRow);

    // Append the title and table to the element with ID "criteria"
    element.appendChild(title);
    element.appendChild(table);
}

function displayResultV(v) {
    var element = document.getElementById("v");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Matrik Preferensi";
    heading.style.color = "#E9967A"; // Change font color
    heading.className = "mb-3 text-center"; // Add a custom CSS class

    // Create the table element with custom styles
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Add a custom CSS class

    // Create the "Alternatif" cell
    var altCell = document.createElement("th");
    altCell.textContent = "Alternatif";
    altCell.rowSpan = 2;
    altCell.classList.add("text-center");
    altCell.style.color = "#E9967A";
    altCell.style.border = "2px solid #F0F8FF"; // Add border to Alternatif cell

    // Create the table header row for "Category" with a colspan matching the number of criteria (C)
    var categoryRow = document.createElement("tr");
    var categoryCell = document.createElement("th");
    categoryCell.textContent = "Kriteria";
    categoryCell.colSpan = Object.keys(v[1]).length;
    categoryCell.classList.add("text-center");
    categoryCell.style.color = "#E9967A"; // Change font color
    categoryCell.style.border = "2px solid #F0F8FF"; // Change border color

    categoryRow.appendChild(altCell);
    categoryRow.appendChild(categoryCell);
    table.appendChild(categoryRow);

    // Create the table header row for criteria names (C1, C2, C3, etc.)
    var headerRow = document.createElement("tr");
    for (var criterion in v[1]) {
        var headerCell = document.createElement("th");
        headerCell.textContent = "C" + criterion;
        headerCell.classList.add("text-center");
        headerCell.style.color = "#E9967A"; // Change font color
        headerCell.style.border = "2px solid #F0F8FF"; // Change border color
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    // Iterate through the matrix and add rows for each criterion and their comparison values
    for (var criterion in v) {
        var row = document.createElement("tr");
        altCell = document.createElement("td");
        altCell.innerHTML = "<b>A" + criterion + "</b>";
        altCell.classList.add("text-center");
        altCell.style.color = "#E9967A"; // Change font color
        altCell.style.border = "2px solid #F0F8FF"; // Add border to Alternatif cell
        row.appendChild(altCell);

        for (var value in v[criterion]) {
            var cell = document.createElement("td");
            var roundedValue = parseFloat(v[criterion][value]).toFixed(4); // Round to four decimal places
            cell.textContent = roundedValue;
            cell.classList.add("text-center");
            cell.style.color = "#E9967A"; // Change font color
            cell.style.border = "2px solid #F0F8FF"; // Change border color
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Append the heading and table to the element with ID "v"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultC(c) {
    var element = document.getElementById("c");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Concordance Index";
    heading.style.color = "#E9967A"; // Ganti warna font
    heading.style.textAlign = "center"; // Pusatkan teks
    heading.className = "mb-3"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)

    // Create a table element
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)
    table.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh tabel
    table.style.color = "#E9967A"; // Atur warna teks untuk seluruh tabel
    table.style.textAlign = "center"; // Pusatkan teks untuk seluruh tabel

    // Create the table header row with colspan for Criteria
    var headerRow = document.createElement("tr");

    // Create the header cell for "Criteria"
    var criteriaHeaderCell = document.createElement("th");
    criteriaHeaderCell.textContent = "Concordance";
    criteriaHeaderCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
    criteriaHeaderCell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
    headerRow.appendChild(criteriaHeaderCell);

    // Iterate through the c object and create header cells for each criterion
    for (var criterion in c[1]) {
        var headerCell = document.createElement("th");
        headerCell.textContent = "C" + criterion;
        headerCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        headerCell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
        headerRow.appendChild(headerCell);
    }

    // Append the header row to the table
    table.appendChild(headerRow);

    // Iterate through the matrix and add rows for each criterion and their comparison values
    for (var criterion in c) {
        var row = document.createElement("tr");

        // Create the cell for the criterion name
        var criterionCell = document.createElement("td");
        criterionCell.textContent = "C" + criterion;
        criterionCell.style.fontWeight = "bold";
        criterionCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        criterionCell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
        row.appendChild(criterionCell);

        // Iterate through the comparison values for this criterion
        for (var value in c[criterion]) {
            var cell = document.createElement("td");
            cell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
            cell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
            var comparison = c[criterion][value];
            if (comparison.length === 1) {
                // Handle the case where there's only one value (e.g., "-")
                cell.textContent = comparison[0];
            } else {
                // Join the comparison values with a comma and space
                cell.textContent = comparison.join(", ");
            }
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the heading and table to the element with ID "c"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultD(d) {
    var element = document.getElementById("d");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Discordance Index";
    heading.style.color = "#E9967A"; // Ganti warna font
    heading.style.textAlign = "center"; // Pusatkan teks
    heading.className = "mb-3"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)

    // Create a table element
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)
    table.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh tabel
    table.style.color = "#E9967A"; // Atur warna teks untuk seluruh tabel
    table.style.textAlign = "center"; // Pusatkan teks untuk seluruh tabel

    // Create the table header row with colspan for Criteria
    var headerRow = document.createElement("tr");

    // Create the header cell for "Criteria"
    var criteriaHeaderCell = document.createElement("th");
    criteriaHeaderCell.textContent = "Discordance";
    criteriaHeaderCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
    criteriaHeaderCell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
    headerRow.appendChild(criteriaHeaderCell);

    // Iterate through the d object and create header cells for each criterion
    for (var criterion in d[1]) {
        var headerCell = document.createElement("th");
        headerCell.textContent = "D" + criterion;
        headerCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        headerCell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
        headerRow.appendChild(headerCell);
    }

    // Append the header row to the table
    table.appendChild(headerRow);

    // Iterate through the matrix and add rows for each criterion and their comparison values
    for (var criterion in d) {
        var row = document.createElement("tr");

        // Create the cell for the criterion name
        var criterionCell = document.createElement("td");
        criterionCell.textContent = "D" + criterion;
        criterionCell.style.fontWeight = "bold";
        criterionCell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
        criterionCell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
        row.appendChild(criterionCell);

        // Iterate through the comparison values for this criterion
        for (var value in d[criterion]) {
            var cell = document.createElement("td");
            cell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
            cell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
            cell.textContent = d[criterion][value];
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the heading and table to the element with ID "d"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultThreshold_C(threshold_c) {
    var element = document.getElementById("threshold_c");
    // Batasi jumlah angka desimal menjadi 4
    threshold_c = threshold_c.toFixed(4);
    element.innerHTML += '<h4 class="text-center m-0" style="color: #E9967A;">' + threshold_c + ' Threshold c</h3>';
}

function displayResultThreshold_D(threshold_d) {
    var element = document.getElementById("threshold_d");
    // Batasi jumlah angka desimal menjadi 4
    threshold_d = threshold_d.toFixed(4);
    element.innerHTML += '<h4 class="text-center m-0" style="color: #E9967A;">' + threshold_d + ' Threshold d</h3>';
}

function displayResultF(f) {
    var element = document.getElementById("f");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Concordance Dominan";
    heading.style.color = "#E9967A"; // Ganti warna font
    heading.style.textAlign = "center"; // Pusatkan teks
    heading.className = "mb-3"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)

    // Create a table element
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)
    table.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh tabel
    table.style.color = "#E9967A"; // Atur warna teks untuk seluruh tabel
    table.style.textAlign = "center"; // Pusatkan teks untuk seluruh tabel

    // Iterate through the f object and add rows for each criterion and their comparison values
    for (var criterion in f) {
        var row = document.createElement("tr");

        // Iterate through the comparison values for this criterion
        for (var value in f[criterion]) {
            var cell = document.createElement("td");
            cell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
            cell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
            cell.textContent = f[criterion][value];
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the heading and table to the element with ID "f"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultG(g) {
    var element = document.getElementById("g");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Concordance Dominan";
    heading.style.color = "#E9967A"; // Ganti warna font
    heading.style.textAlign = "center"; // Pusatkan teks
    heading.className = "mb-3"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)

    // Create a table element
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)
    table.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh tabel
    table.style.color = "#E9967A"; // Atur warna teks untuk seluruh tabel
    table.style.textAlign = "center"; // Pusatkan teks untuk seluruh tabel

    // Iterate through the g object and add rows for each criterion and their comparison values
    for (var criterion in g) {
        var row = document.createElement("tr");

        // Iterate through the comparison values for this criterion
        for (var value in g[criterion]) {
            var cell = document.createElement("td");
            cell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
            cell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
            cell.textContent = g[criterion][value];
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the heading and table to the element with ID "g"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultE(e) {
    var element = document.getElementById("e");

    // Create an <h3> element for the table heading
    var heading = document.createElement("h3");
    heading.textContent = "Agregasi Dominan";
    heading.style.color = "#E9967A"; // Ganti warna font
    heading.style.textAlign = "center"; // Pusatkan teks
    heading.className = "mb-3"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)

    // Create a table element
    var table = document.createElement("table");
    table.className = "table table-bordered"; // Tambahkan kelas CSS kustom (misalnya, Bootstrap)
    table.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh tabel
    table.style.color = "#E9967A"; // Atur warna teks untuk seluruh tabel
    table.style.textAlign = "center"; // Pusatkan teks untuk seluruh tabel

    // Iterate through the e object and add rows for each criterion and their comparison values
    for (var criterion in e) {
        var row = document.createElement("tr");

        // Iterate through the comparison values for this criterion
        for (var value in e[criterion]) {
            var cell = document.createElement("td");
            cell.style.border = "2px solid #F0F8FF"; // Atur batas untuk seluruh sel
            cell.style.color = "#E9967A"; // Atur warna teks untuk seluruh sel
            cell.textContent = e[criterion][value];
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the heading and table to the element with ID "e"
    element.appendChild(heading);
    element.appendChild(table);
}

function displayResultConclusion(conclusionMatrix) {
    // Membuat elemen <h3> untuk judul dapat disimpulkan
    var headingDapat = document.createElement("h3");
    headingDapat.textContent = "Dapat Disimpulkan";
    headingDapat.style.color = "#E9967A"; // Ganti warna font
    headingDapat.classList.add("mb-3", "text-center"); // Tambahkan kelas CSS kustom (misalnya, Bootstrap)

    // Membuat elemen <h3> untuk judul tidak dapat disimpulkan
    var headingTidak = document.createElement("h3");
    headingTidak.textContent = "Tidak Dapat Disimpulkan";
    headingTidak.style.color = "#E9967A"; // Ganti warna font
    headingTidak.classList.add("mb-3", "text-center"); // Tambahkan kelas CSS kustom (misalnya, Bootstrap)

    // Membuat unordered list element untuk  dapat disimpulkan
    var listConcluded = document.createElement("ul");
    listConcluded.style.listStyleType = "none"; // Menghilangkan tanda bulet
    listConcluded.style.textAlign = "center"; // Pusatkan teks daftar

    // Membuat unordered list element untuk  tidak dapat disimpulkan
    var listNotConcluded = document.createElement("ul");
    listNotConcluded.style.listStyleType = "none"; // Menghilangkan tanda bulet
    listNotConcluded.style.textAlign = "center"; // Pusatkan teks daftar

    // Iterate through the conclusionMatrix and add items to the relevant list
    for (var row in conclusionMatrix) {
        for (var col in conclusionMatrix[row]) {
            if (conclusionMatrix[row][col] === 1) {
                var listItem = document.createElement("li");
                listItem.style.color = "#E9967A"; // Atur warna teks
                listItem.style.margin = "8px"; // Atur margin
                listItem.textContent = "A" + row + " -> A" + col + " (A" + col + " didominasi oleh A" + row + ")";
                listConcluded.appendChild(listItem);
            } else if (conclusionMatrix[row][col] === 0) {
                var listItem = document.createElement("li");
                listItem.style.color = "#E9967A"; // Atur warna teks
                listItem.style.margin = "8px"; // Atur margin
                listItem.textContent = "A" + row + " dengan A" + col;
                listNotConcluded.appendChild(listItem);
            }
        }
    }

    // Mengganti isi elemen dengan ID yang sesuai
    var elementDapat = document.getElementById("conclusion_dapat");
    var elementTidak = document.getElementById("conclusion_tidak");

    // Menambahkan judul dan daftar  dapat disimpulkan
    elementDapat.appendChild(headingDapat);
    elementDapat.appendChild(listConcluded);

    // Menambahkan judul dan daftar  tidak dapat disimpulkan
    elementTidak.appendChild(headingTidak);
    elementTidak.appendChild(listNotConcluded);
}