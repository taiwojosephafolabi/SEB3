"use strict";

import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { poolConnectionRecordLabel } from "./database/recordLabelDB.js";
import { createPool } from "mysql2";

const app = express();
app.use(bodyParser.json());
dotenv.config();

// const poolConnectionRecordLabel = createPool({
//   host: "localhost",
//   user: "root",
//   password: "Adidas3501!",
//   database: "week_16_joins",
//   connectionLimit: 100,
// });

app.get('/record-label', (req, res) => {
  poolConnectionRecordLabel.query('SELECT * FROM record_label', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send(result);
  });
});

app.get('/artists', (req, res) => {
  poolConnectionRecordLabel.query('SELECT * FROM artists', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send(result);
  });
});

app.get('/album', (req, res) => {
  poolConnectionRecordLabel.query('SELECT * FROM album', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send(result);
  });
});

app.get('/song', (req, res) => {
  poolConnectionRecordLabel.query('SELECT * FROM song', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send(result);
  });
});

app.post('/record-label/new', (req, res) => {
  poolConnectionRecordLabel.query('INSERT INTO record_label VALUES (6, "Virgin Records", "1972-01-01");', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('New Record Label added!');
  });
});

app.post('/artists/new', (req, res) => {
  poolConnectionRecordLabel.query('INSERT INTO artists VALUES (16, 6,"Lewis Capaldi");', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('New Artist added!');
  });
});

app.post('/album/new', (req, res) => {
  poolConnectionRecordLabel.query('INSERT INTO album VALUES (16, 16, "Divinely Uninspired To A Hellish Extent", 12, 2019);', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('New Album added!');
  });
});

app.post('/song/new', (req, res) => {
  poolConnectionRecordLabel.query('INSERT INTO song VALUES (21, 16, "Grace", 16, NULL, 3.05);', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('New Song added!');
  });
});

app.put('/record-label/update', (req, res) => {
  poolConnectionRecordLabel.query('UPDATE record_label SET name = "Universal Music" WHERE id = 2;', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('Record Label data updated!');
  });
});

app.put('/artists/update', (req, res) => {
  poolConnectionRecordLabel.query('UPDATE artists SET artist_name = "Metro Boomin" WHERE artist_id = 9;', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('Artist data updated!');
  });
});

app.put('/album/update', (req, res) => {
  poolConnectionRecordLabel.query('UPDATE album SET total_tracks = 14 WHERE album_id = 13;', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('Album data updated!');
  });
});

app.put('/song/update', (req, res) => {
  poolConnectionRecordLabel.query('UPDATE song SET song_name = "Bruises" WHERE song_id = 21;', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('Song data updated!');
  });
});


app.delete('/record-label/delete', (req, res) => {
  poolConnectionRecordLabel.query('DELETE FROM record_Label WHERE id = 6;', async (err, result) => {
    if (err) {
      throw new Error('ERROR: ' + err.message);
    }
    await res.send('Record Label data deleted!');
  });
});

app.delete('/artist/delete', (req, res) => {});

app.delete('/album/delete', (req, res) => {});

app.delete('/song/delete', (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
});
