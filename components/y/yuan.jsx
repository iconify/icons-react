import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e0n6lxb8k {
  d: path("M10 9a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1");
}

.ewfkbhyag {
  d: path("M4.419 2.186a1 1 0 0 1 1.395.233l5 7a1 1 0 1 1-1.628 1.162l-5-7a1 1 0 0 1 .233-1.395");
}

.jy-pfvbxd {
  d: path("M15.581 2.186a1 1 0 0 0-1.395.233l-5 7a1 1 0 0 0 1.628 1.162l5-7a1 1 0 0 0-.233-1.395");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.sttlrlbro {
  d: path("M4.5 11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ewfkbhyag"/><path class="jy-pfvbxd"/><path class="sttlrlbro"/><path class="e0n6lxb8k"/></g>`,
		"fallback": "pepicons-pop:yuan",
	});
}

export default Component;
