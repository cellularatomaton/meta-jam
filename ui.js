export default {
  forms: {
    patient: {
      title: 'Enter Patient Information',
      fields: [
        ['firstName', 'First Name', 'string'],
        ['lastName', 'PLast Name', 'string'],
        ['relationToSubscriber', 'Relationship To Subscriber', 'string'],
        ['dateOfBirth', 'Date Of Birth', 'date'],
        ['socialSecurityNumber', 'Social Security Number', 'string'],
        ['phone', 'Phone Number', 'tel'],
        ['email', 'Email', 'email'],
        ['street', 'Street', 'string'],
        ['city', 'City', 'string'],
        ['state', 'State', 'string'],
        ['postalCode', 'Postal Code', 'string']
      ]
    },
    subscriber: {
      title: 'Enter Subscriber Information',
      fields: [
        ['firstName', 'First Name', 'string'],
        ['lastName', 'Last Name', 'string'],
        ['subscriberId', 'Subscriber ID', 'string'],
        ['policyId', 'Policy ID', 'string'],
        ['carrier', 'Carrier', 'string']
      ]
    },
    procedure: {
      title: 'Enter Procedure Information',
      fields: [
        ['code', 'Code', 'string'],
        ['date', 'Date', 'date'],
        ['fee', 'Fee', 'long'],
        ['notes', 'Notes', 'string']
      ]
    }
  }
}
