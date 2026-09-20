import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d50rxq60a {
  fill: var(--svg-color--fff, #fff);
  d: path("M3.121 10.623a.485.485 0 0 1 0-.642a.387.387 0 0 1 .587 0l3.09 3.396a.5.5 0 0 1 0 .642a.387.387 0 0 1-.586 0zm8.372-.642a.5.5 0 0 1 0 .642l-3.09 3.396a.387.387 0 0 1-.587 0a.485.485 0 0 1 0-.642l3.09-3.396a.387.387 0 0 1 .587 0m1.018.642a.485.485 0 0 1 0-.642a.385.385 0 0 1 .454-.1q.077.037.132.1l3.091 3.396a.5.5 0 0 1 0 .642a.387.387 0 0 1-.587 0zm8.372 0a.5.5 0 0 0 0-.642a.387.387 0 0 0-.587 0l-3.09 3.396a.485.485 0 0 0 0 .642a.388.388 0 0 0 .586 0z");
}
</style><path class="d50rxq60a"/>`,
		"fallback": "token-branded:wwy",
	});
}

export default Component;
