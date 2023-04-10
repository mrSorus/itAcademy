const data = [
	{
		type: "input",
		id: "Name",
		value: "",
		placeholder: "name",
	},
	{
		type: "input",
		id: "surname",
		value: "",
		placeholder: "surname",
	},
	{
		type: "date",
		id: "birthday",
		value: "",
		placeholder: "date of birth",
	},
	{
		type: "toggle",
		id: "sex",
		value: "man",
		options: ["man", "woman"],
		placeholder: "sex",
	},
	{
		type: "checkbox",
		id: "time",
		value: "",
		options: ["9-10 AM", "11-12 AM", "1-2 PM", "3-4 PM", "5-6 PM"],
		placeholder: "select timeslot for assessment",
	},
];
// Перед вами массив данных, вы должны создать форму на странице а затем поместать в нее элементы созданные на основе этого массива данных,
// поле type определяет тип создаваемого элемента, value его текущее значение, options доступные варианты, placeholder это атрибут лейб, id это ваш id, так же name, при помощи id мы связываем placeholder и элемент,
// после создания формы мы создаем кнопку submit при надатии на которую мы должны пройтись по всем элементам и создать на их основе массив [{id: id, value: новое значение}] и просто вывести его


const form = document.createElement("form");

form.classList.add("form-style");
document.body.prepend(form);

const renderForm = (formData) => {
  formData.forEach((field) => {
    if (field.type === "toggle") {
      const label = document.createElement("label");
      label.setAttribute("for", field.id);
      label.textContent = field.placeholder + ": ";
      form.append(label);

      const toggleContainer = document.createElement("div");
      toggleContainer.classList.add("toggle-container");
      form.append(toggleContainer);

      field.options.forEach((option) => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = field.id;
        radioInput.id = option;
        radioInput.value = option;
        toggleContainer.append(radioInput);

        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", option);
        radioLabel.textContent = option;
        toggleContainer.append(radioLabel);
      });
    } else if (field.type === "checkbox") {
      const label = document.createElement("label");
      label.setAttribute("for", field.id);
      label.textContent = field.placeholder + ": ";
      form.append(label);

      const checkboxContainer = document.createElement("div");
      checkboxContainer.classList.add("checkbox-container");
      form.append(checkboxContainer);

      field.options.forEach((option) => {
        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.name = field.id;
        checkboxInput.id = option;
        checkboxInput.value = option;
        checkboxContainer.append(checkboxInput);

        const checkboxLabel = document.createElement("label");
        checkboxLabel.setAttribute("for", option);
        checkboxLabel.textContent = option;
        checkboxContainer.append(checkboxLabel);
      });
    } else {
      const input = document.createElement("input");
      input.type = field.type;
      input.name = field.id;
      input.id = field.id;
      input.value = field.value;

      const label = document.createElement("label");
      label.setAttribute("for", field.id);
      label.textContent = field.placeholder + ": ";

      form.append(label);
      form.append(input);
    }
  });
};

renderForm(data);

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";


form.append(submitButton);

const addNewData = () => {
  const formData = [];
  const formElements = form.elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.type === "radio") {
      if (element.checked) {
        formData.push({ id: element.name, value: element.value });
      }
    } else if (element.type === "checkbox") {
      if (element.checked) {
        formData.push({ id: element.name, value: element.value });
      }
    } else if (element.type !== "submit") {
      formData.push({ id: element.id, value: element.value });
    }
  }

  console.log(formData);
};

submitButton.addEventListener("click", addNewData);
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
});