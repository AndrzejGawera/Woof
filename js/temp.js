checkMail() {
  let isMailOk = this.nodes.email.value.match(this.patterns.email);
  let isNotWhitespace = this.patterns.whitespace.test(this.nodes.email.value);
  if ((this.nodes.email.value.length > 0) && isMailOk && !isNotWhitespace) {
    this.state.email = true;
    if (this.nodes.email.classList.contains('border-red')) {
      this.nodes.email.classList.remove('border-red');
    }
    this.nodes.email.classList.add('border-green');
  } else {
    this.state.email = false;
    this.nodes.email.classList.add('border-red');
  }
}
checkTextarea() {
  let isNotWhitespace = this.patterns.whitespace.test(this.nodes.name.value);
  if ((this.nodes.message.value.length > 0) && !isNotWhitespace) {
    this.state.name = true;
    if (this.nodes.message.classList.contains('border-red')) {
      this.nodes.message.classList.remove('border-red');
    }
    this.nodes.message.classList.add('border-green');
  } else {
    this.state.message = false;
    this.nodes.message.classList.add('border-red');
  }
}