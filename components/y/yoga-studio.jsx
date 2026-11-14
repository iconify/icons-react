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
		"content": `<style>.vqiwvvbtg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.252 7.696Q9 7.349 9 4.75q0-3 3-3t3 3q0 2.599-2.252 2.946l.002.054v1.334l3.647 2.28q.161.1.254.264l2 3.5q.072.125.092.268q2.507.288 2.507 2.104q0 1.819-2.649 2.181q-2.213.301-6.601-.421q-4.388.722-6.601.421Q2.75 19.319 2.75 17.5q0-1.816 2.507-2.104q.02-.143.092-.268l2-3.5q.093-.164.254-.264l3.647-2.28V7.75zm4.19 4.84l-2.692-1.683V14.5q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-3.647l-2.692 1.683l-1.617 2.829q2.027.116 5.059.862q3.032-.746 5.059-.862z");
}
</style><path class="vqiwvvbtg"/>`,
		"fallback": "uix-solid:yoga-studio",
	});
}

export default Component;
