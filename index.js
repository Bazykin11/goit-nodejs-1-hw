const contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts(); 



const invokeAction =  async ({ action, id, name, email, phone }) => {
  switch (action) {
      case 'list':
          const list =  await contacts.listContacts();
          console.log(list)
          break;
      case 'get':
          const contact = await contacts.getContactById(id)
          console.log(contact)
          break;
      case 'add':
          const addContact = await contacts.addContact(name, email, phone);
          console.log(addContact);
          break;
      case 'remove':
          const removeContact = await contacts.removeContact(id);
          console.log(removeContact);
          break;
      
      default:
           console.warn("\x1B[31m Unknown action type!");
      
  }
};

invokeAction(argv);

