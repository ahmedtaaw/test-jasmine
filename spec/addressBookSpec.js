describe('Address Book', function () {
    var addressBook,
        thisContact;
    beforeEach(function () {
        addressBook = new AddressBook(),
            thisContact = new Contact();
    });
    it('Should be able to add a contact', function () {


        addressBook.addContact(thisContact);

        //i should expect that if i were to get the first contact in my address book, that this would be the same as this contact.
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    it('should be able to delete a contact', function () {


        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});