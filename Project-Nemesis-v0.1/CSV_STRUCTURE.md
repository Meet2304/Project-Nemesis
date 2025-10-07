# CSV Database Structure Guide

This document outlines the proposed CSV file structure for the Project Nemesis judicial management system.

## Overview

The system will use CSV files as a simple database solution. Each entity will have its own CSV file with specific fields.

## File Locations

```
data/
├── users.csv
├── cases.csv
├── documents.csv
├── schedules.csv
├── news.csv
├── resources.csv
└── messages.csv
```

## CSV Schemas

### 1. users.csv

Stores user account information for all system users.

```csv
id,name,email,password_hash,role,phone,address,created_at,last_login,status
1,John Doe,john.doe@court.gov,$2b$10$...,judge,+1-555-0101,"123 Court St",2025-01-15T10:00:00Z,2025-10-08T09:30:00Z,active
2,Jane Smith,jane.smith@court.gov,$2b$10$...,clerk,+1-555-0102,"456 Legal Ave",2025-02-01T14:00:00Z,2025-10-08T08:15:00Z,active
3,Robert Johnson,robert.j@lawfirm.com,$2b$10$...,lawyer,+1-555-0103,"789 Attorney Blvd",2025-03-10T11:00:00Z,2025-10-07T16:45:00Z,active
```

**Fields**:
- `id`: Unique identifier (auto-increment)
- `name`: Full name of the user
- `email`: Email address (unique)
- `password_hash`: Bcrypt hashed password
- `role`: User role (judge, clerk, lawyer, admin, citizen)
- `phone`: Contact phone number
- `address`: Physical address
- `created_at`: Account creation timestamp (ISO 8601)
- `last_login`: Last login timestamp (ISO 8601)
- `status`: Account status (active, inactive, suspended)

---

### 2. cases.csv

Stores information about all court cases.

```csv
id,case_number,title,type,status,priority,filed_date,judge_id,plaintiff,defendant,plaintiff_lawyer_id,defendant_lawyer_id,description,next_hearing,created_at,updated_at
1,CV-2025-001,Smith v. Johnson,Civil,active,high,2025-03-15,1,Mary Smith,Bob Johnson,3,4,Property dispute over boundary lines,2025-11-15T14:00:00Z,2025-03-15T09:00:00Z,2025-10-08T10:00:00Z
2,CR-2025-002,State v. Williams,Criminal,pending,medium,2025-04-20,1,State of [State],Tom Williams,null,5,Theft charges,2025-11-20T10:00:00Z,2025-04-20T13:00:00Z,2025-10-07T15:30:00Z
```

**Fields**:
- `id`: Unique identifier
- `case_number`: Official case number (format: TYPE-YEAR-NUMBER)
- `title`: Case title
- `type`: Case type (Civil, Criminal, Family, Administrative)
- `status`: Current status (pending, active, closed, archived)
- `priority`: Priority level (low, medium, high, urgent)
- `filed_date`: Date case was filed
- `judge_id`: Foreign key to users.csv (judge)
- `plaintiff`: Plaintiff name
- `defendant`: Defendant name
- `plaintiff_lawyer_id`: Foreign key to users.csv (lawyer)
- `defendant_lawyer_id`: Foreign key to users.csv (lawyer)
- `description`: Case description
- `next_hearing`: Next scheduled hearing timestamp
- `created_at`: Record creation timestamp
- `updated_at`: Last update timestamp

---

### 3. documents.csv

Stores metadata for all documents in the system.

```csv
id,case_id,title,type,file_path,uploaded_by,upload_date,file_size,status,access_level,description
1,1,Initial Complaint,complaint,/documents/2025/03/complaint_001.pdf,3,2025-03-15T10:30:00Z,245678,approved,public,Original complaint filing
2,1,Response Brief,brief,/documents/2025/04/response_001.pdf,4,2025-04-10T14:20:00Z,189234,approved,public,Defendant's response
3,2,Evidence Photo 1,evidence,/documents/2025/04/evidence_002_01.jpg,5,2025-04-22T09:15:00Z,3456789,under_review,restricted,Security camera footage
```

**Fields**:
- `id`: Unique identifier
- `case_id`: Foreign key to cases.csv
- `title`: Document title
- `type`: Document type (complaint, brief, evidence, motion, order, etc.)
- `file_path`: Path to actual file
- `uploaded_by`: Foreign key to users.csv
- `upload_date`: Upload timestamp
- `file_size`: File size in bytes
- `status`: Document status (pending, approved, rejected, under_review)
- `access_level`: Access level (public, restricted, confidential)
- `description`: Document description

---

### 4. schedules.csv

Stores hearing and event schedules.

```csv
id,case_id,type,title,description,start_time,end_time,location,judge_id,status,created_by,created_at,notified
1,1,hearing,Initial Hearing,First hearing for case CV-2025-001,2025-11-15T14:00:00Z,2025-11-15T15:30:00Z,Courtroom 3A,1,scheduled,2,2025-10-01T10:00:00Z,true
2,2,hearing,Arraignment,Criminal arraignment hearing,2025-11-20T10:00:00Z,2025-11-20T11:00:00Z,Courtroom 2B,1,scheduled,2,2025-10-05T14:30:00Z,true
3,null,training,Staff Training,System training for clerks,2025-11-10T09:00:00Z,2025-11-10T12:00:00Z,Training Room,null,scheduled,2,2025-09-15T11:00:00Z,false
```

**Fields**:
- `id`: Unique identifier
- `case_id`: Foreign key to cases.csv (null for non-case events)
- `type`: Event type (hearing, conference, training, meeting)
- `title`: Event title
- `description`: Event description
- `start_time`: Start timestamp
- `end_time`: End timestamp
- `location`: Physical location
- `judge_id`: Foreign key to users.csv (if applicable)
- `status`: Status (scheduled, completed, cancelled, postponed)
- `created_by`: Foreign key to users.csv
- `created_at`: Creation timestamp
- `notified`: Whether participants have been notified (true/false)

---

### 5. news.csv

Stores news articles and announcements.

```csv
id,title,excerpt,content,category,author_id,published_date,status,views,featured
1,New Digital Filing System Launched,Courts across the region now accept electronic filings...,"Full article content here...",Technology,1,2025-10-05T08:00:00Z,published,245,true
2,Annual Judicial Conference Announced,Leading legal experts to gather...,"Conference details and agenda...",Events,1,2025-10-01T09:00:00Z,published,189,false
3,Case Management System Update,Latest update includes enhanced search...,"Update changelog and features...",Updates,1,2025-09-28T10:00:00Z,published,312,false
```

**Fields**:
- `id`: Unique identifier
- `title`: Article title
- `excerpt`: Short excerpt/summary
- `content`: Full article content
- `category`: Article category (Technology, Events, Updates, etc.)
- `author_id`: Foreign key to users.csv
- `published_date`: Publication timestamp
- `status`: Status (draft, published, archived)
- `views`: Number of views
- `featured`: Featured article flag (true/false)

---

### 6. resources.csv

Stores information about available resources.

```csv
id,category,title,description,type,url,file_path,size,downloads,published_date,status
1,Documentation,User Guide,Comprehensive guide for system users,pdf,null,/resources/user_guide.pdf,2456789,156,2025-01-15T10:00:00Z,active
2,Training,Introduction Video,Getting started with the system,video,https://video.example.com/intro,null,null,89,2025-02-01T14:00:00Z,active
3,Forms,Case Filing Form,Standard form for case filing,docx,null,/resources/forms/case_filing.docx,45678,234,2025-01-10T09:00:00Z,active
```

**Fields**:
- `id`: Unique identifier
- `category`: Resource category (Documentation, Training, Forms, Legal, Support, Downloads)
- `title`: Resource title
- `description`: Resource description
- `type`: File type (pdf, video, docx, etc.)
- `url`: External URL (if applicable)
- `file_path`: Local file path (if applicable)
- `size`: File size in bytes (null for external resources)
- `downloads`: Download count
- `published_date`: Publication timestamp
- `status`: Status (active, archived)

---

### 7. messages.csv

Stores system messages and notifications.

```csv
id,from_user_id,to_user_id,case_id,subject,message,sent_date,read_date,status,priority
1,2,3,1,Document Submission Required,Please submit the required documents...,2025-10-07T10:00:00Z,2025-10-07T14:30:00Z,read,medium
2,1,3,1,Hearing Date Confirmed,Your hearing has been confirmed for...,2025-10-05T15:00:00Z,null,unread,high
3,2,4,2,Evidence Review,Please review the submitted evidence...,2025-10-06T09:30:00Z,2025-10-06T11:00:00Z,read,low
```

**Fields**:
- `id`: Unique identifier
- `from_user_id`: Foreign key to users.csv (sender)
- `to_user_id`: Foreign key to users.csv (recipient)
- `case_id`: Foreign key to cases.csv (if related to a case)
- `subject`: Message subject
- `message`: Message content
- `sent_date`: Sent timestamp
- `read_date`: Read timestamp (null if unread)
- `status`: Status (unread, read, archived)
- `priority`: Priority level (low, medium, high)

---

## Implementation Notes

### 1. CSV Handling in Node.js

Use the `csv-parser` and `csv-writer` npm packages:

```bash
npm install csv-parser csv-writer
```

### 2. Example Read Operation

```typescript
import fs from 'fs';
import csv from 'csv-parser';

async function readCases() {
  const results: any[] = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream('data/cases.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}
```

### 3. Example Write Operation

```typescript
import { createObjectCsvWriter } from 'csv-writer';

async function addCase(caseData: any) {
  const csvWriter = createObjectCsvWriter({
    path: 'data/cases.csv',
    header: [
      { id: 'id', title: 'id' },
      { id: 'case_number', title: 'case_number' },
      // ... other fields
    ],
    append: true
  });

  await csvWriter.writeRecords([caseData]);
}
```

### 4. Data Validation

- Validate all inputs before writing to CSV
- Use TypeScript interfaces for type checking
- Implement field-level validation rules
- Check for required fields
- Validate foreign key relationships

### 5. Backup Strategy

- Regular automated backups
- Version control for CSV files
- Export functionality for users
- Audit logs for changes

### 6. Security Considerations

- Store CSV files outside public directory
- Implement access control
- Hash sensitive data (passwords)
- Sanitize inputs to prevent CSV injection
- Use HTTPS for file transfers

### 7. Performance Tips

- Index commonly queried fields
- Implement caching for frequently accessed data
- Consider pagination for large datasets
- Use streaming for large file operations
- Optimize read/write operations

---

## Migration Path

When moving from CSV to a proper database:

1. **Export to SQL**: Convert CSV to SQL INSERT statements
2. **Schema Mapping**: Map CSV fields to database columns
3. **Data Validation**: Verify data integrity during migration
4. **Testing**: Thoroughly test with migrated data
5. **Rollback Plan**: Maintain CSV backups during transition

---

**Note**: This CSV structure is designed for simplicity and ease of development. For production use, consider migrating to a proper database system (PostgreSQL, MySQL, MongoDB, etc.) for better performance, scalability, and features.

**Last Updated**: October 8, 2025
**Version**: 1.0
