const find = `
  select 
    *
  from 
    users
  where 
    is_deleted = false and username = $1 and password = $2
`;

module.exports = {
  find,
};
