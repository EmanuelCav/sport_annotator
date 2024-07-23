package context

import (
	"context"
	"time"
)

func Context() (context.Context, context.CancelFunc) {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	return ctx, cancel

}
