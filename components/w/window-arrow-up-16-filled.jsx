import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ntfds2bhc {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v2.1a5.5 5.5 0 0 0-1-.393V6H3v5.5A1.5 1.5 0 0 0 4.5 13h1.707q.149.524.393 1H4.5A2.5 2.5 0 0 1 2 11.5zm14 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854-2.353l-2 2a.5.5 0 0 0 .708.707L11 10.707V13.5a.5.5 0 0 0 1 0v-2.793l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2A.5.5 0 0 0 11.503 9h-.006a.5.5 0 0 0-.348.144z");
}
</style><path class="ntfds2bhc"/>`,
		"fallback": "fluent:window-arrow-up-16-filled",
	});
}

export default Component;
