# FamobiTest
To build and run the progect run in the root folder "npm start -- --reset-cache" and them 'i' to run ios and 'a' to run android (too much words 'run'))).
</br>
Also there is a zip with android .app attached. Just download .app to your android smartphone.
</br>
[FamobiTestTask.apk.zip](https://github.com/VashaMasha/FamobiTest/files/10897097/FamobiTestTask.apk.zip)
</br>
<div align="center">
<img src="https://user-images.githubusercontent.com/36168154/223086559-c8f3390d-0241-40d7-b8b4-9cb61cfd7a91.png" width="300">
<img src="https://user-images.githubusercontent.com/36168154/223086554-5646b1a0-ba3f-49c6-8029-77af6d7fde0e.png" width="300">
<img src="https://user-images.githubusercontent.com/36168154/223086538-2d7d8ce0-73fa-47f9-83d5-d6fe2cb3a6fc.png" width="300">
</div>
</br>
</br>
</br>
I am also attaching the solution to the extra problem from the test task:

``` 
type Level = {
    fails: number,
    gameId: string,
    playTime: number,
    wins: number,
  }

  const getGamesGesult = () => {
    if (progress) {
      const res = [] as Level[];
      Object.values(progress).forEach((p) => {
        const existing = res.filter((r) => r.gameId === p.gameId)?.[0];
        if (!existing) {
          res.push(p);
        } else {
          existing.fails += p.fails;
          existing.playTime += p.playTime;
          existing.wins += p.wins;
        }
      });
    }
  };
