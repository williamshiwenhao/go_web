package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./view", false)))
	r.GET("/ping", func(c *gin.Context) {
		c.String(200, "test")
	})
	r.GET("/index.html", func(c *gin.Context) {
		c.String(200, "test")
	})
	r.Run(":8999")
}
