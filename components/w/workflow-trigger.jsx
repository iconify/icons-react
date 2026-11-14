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
		"content": `<style>.crrsd2bah {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.75 2.25h-7.5q-2.485 0-4.243 1.757Q2.25 5.765 2.25 8.25v7.5q0 2.485 1.757 4.243Q5.765 21.75 8.25 21.75h7.5q2.485 0 4.243-1.757q1.757-1.758 1.757-4.243v-7.5q0-2.485-1.757-4.243Q18.235 2.25 15.75 2.25m-4.681 5.722l.002-.004q.561-.816 1.47-.419q.912.399.691 1.363l-.12.542q-.068.307.129.551q.196.245.509.245q1.009 0 1.477.893q.468.894-.106 1.723l-2.19 3.162q-.561.821-1.472.423q-.912-.399-.691-1.363l.12-.542q.068-.307-.129-.551q-.196-.245-.509-.245q-1.009 0-1.477-.893q-.468-.894.106-1.723z");
}
</style><path class="crrsd2bah"/>`,
		"fallback": "uix-solid:workflow-trigger",
	});
}

export default Component;
