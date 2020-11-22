class Validator {
  constructor(state, nodes) {
    this.state = state || {
      name: null,
      email: null,
      message: null
    };
    this.nodes = nodes || {
      name: document.querySelector('#name'),
      email: document.querySelector('#email'),
      message: document.querySelector('#message'),
      submitButton: document.querySelector('.form__submit')
    };
    this.patterns = {
      email: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
      whitespace: /^\s*$/gi,
      firstLetterUppercase: /^(\b[A-Z]\w*\s*)+$/g
    };
    this.nodes.name.addEventListener('keyup', this.checkName.bind(this));
    this.nodes.email.addEventListener('keyup', this.checkMail.bind(this));
    this.nodes.message.addEventListener('input', this.checkTextarea.bind(this));
    this.nodes.submitButton.addEventListener('click', this.sendForm.bind(this));
  }
  checkName() {
    let isFirstLetterUppercase = this.nodes.name.value.match(this.patterns.firstLetterUppercase);
    let isNotWhitespace = this.patterns.whitespace.test(this.nodes.name.value);
    if ((this.nodes.name.value.length > 0) && isFirstLetterUppercase && !isNotWhitespace) {
      this.state.name = true;
      if (this.nodes.name.classList.contains('border-red')) {
        this.nodes.name.classList.remove('border-red');
      }
      this.nodes.name.classList.add('border-green');
    } else {
      this.state.name = false;
      this.nodes.name.classList.add('border-red');
    }
    this.checkState();
  }
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
    this.checkState();
  }
  checkTextarea() {
    let isNotWhitespace = this.nodes.message.value.match(this.patterns.whitespace);
    if ((this.nodes.message.value.length > 0) && !isNotWhitespace) {
      this.state.message = true;
      if (this.nodes.message.classList.contains('border-red')) {
        this.nodes.message.classList.remove('border-red');
      }
      this.nodes.message.classList.add('border-green');
    } else {
      this.state.message = false;
      this.nodes.message.classList.add('border-red');
    }
    this.checkState();
  }
  checkState() {
    if (this.state.name && this.state.email && this.state.message) {
    this.nodes.submitButton.removeAttribute('disabled');
    } else {
      this.nodes.submitButton.setAttribute('disabled', "true");
    }
  }
  sendForm(e) {
    e.preventDefault();
    alert('Message has been sent');
  }
}

const formValidator = new Validator;
