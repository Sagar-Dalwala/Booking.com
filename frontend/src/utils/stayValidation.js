export const validateName = (name) => {
  if (!name) {
    return "Property name is required.";
  }

  if (name.length < 3) {
    return "Property name must be at least 3 characters long.";
  }

  return true;
};

export const validateDescription = (description) => {
  if (!description) {
    return "Property description is required.";
  }

  if (description.length < 5) {
    return "Property description must be at least 5 characters long.";
  }

  return true;
};
