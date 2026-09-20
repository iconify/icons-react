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
		"content": `<style>.n_7d6iglx {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.5 5.5 0 0 0-1-.393V7H4v7a2 2 0 0 0 2 2h3.207q.149.524.393 1H6a3 3 0 0 1-3-3zm16 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854-2.353l-2 2a.5.5 0 0 0 .708.707L14 13.707V16.5a.5.5 0 0 0 1 0v-2.793l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.351-.146h-.006a.5.5 0 0 0-.348.144z");
}
</style><path class="n_7d6iglx"/>`,
		"fallback": "fluent:window-arrow-up-20-filled",
	});
}

export default Component;
