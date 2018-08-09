# source: http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html

library(tidyverse);
library(jsonlite)
setwd("projects/finsim/data")
getwd()


raw <-  read_csv("rawHistoricData.csv", col_types = "nnnnnnn")
returns <- raw[,1:4]
names(returns) <- c("year", "sp500", "tbill3", "tbond10")
returns$sp500 <- returns$sp500/100
returns$tbill3 <- returns$tbill3/100
returns$tbond10 <- returns$tbond10/100

View(returns)
write_csv(returns, "return_data.csv")
write_json(returns, "return_data.json")  
