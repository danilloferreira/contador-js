function updateCount() {
    var textArea = document.getElementById('textArea');
    var text = textArea.value;
    if (text.length > 140) {
        textArea.value = text.substring(0, 140);
    }
    document.getElementById('charCount').innerText = textArea.value.length;
}
