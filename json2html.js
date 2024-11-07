export default function json2html(data) {
    // Extract unique keys for table headers
    const columns = [...new Set(data.flatMap(Object.keys))];

    // Generate the table header
    const header = columns.map((col) => `<th>${col}</th>`).join("");

    // Generate the table body
    const rows = data
        .map((row) =>
            `<tr>${columns
                .map((col) => `<td>${row[col] ?? ""}</td>`)
                .join("")}</tr>`
        )
        .join("");

    // Combine everything into a table
    return `<table data-user="rimshafatima4147@gmail.com">
    <thead>
      <tr>${header}</tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>`;
}
