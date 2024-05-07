CREATE MIGRATION m1npfp637r6pm674byv2kokpwpi6b7baoatomrrkgolnsrwwnf6h4q
    ONTO initial
{
  CREATE TYPE default::Photographer {
      CREATE REQUIRED PROPERTY clerk_id: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::Photo {
      CREATE REQUIRED LINK photographer: default::Photographer;
      CREATE REQUIRED PROPERTY file_key: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY is_claimed: std::bool {
          SET default := false;
      };
  };
};
