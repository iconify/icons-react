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
		"content": `<style>.locgzqbjm {
  fill-rule: evenodd;
  d: path("m21 12l-5.106-4.498v3.296l-5.07 3.298l5.07.002V16.5zM3 12l5.106 4.5v-3.263l5.034-3.3l-5.032-.002V7.5z");
}
</style><path clip-rule="evenodd" class="locgzqbjm"/>`,
		"fallback": "token-branded:zksync",
	});
}

export default Component;
