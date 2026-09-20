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
		"content": `<style>.vv-pvim5v {
  fill: var(--svg-color--47dba7, #47dba7);
  d: path("M16.379 5.75a38.8 38.8 0 0 1-4.447 6.51c-1.524-1.482-3.155-3.562-4.939-6.304c1.27-1.742 2.912-2.89 4.627-2.954c1.493-.053 3.282 1.032 4.759 2.747m-5.527 8.707L11.09 21c-4.298-.381-7.093-3.785-6.394-9.153c.164-1.26.513-2.488 1-3.6c0 0 2.552 3.929 5.156 6.21m2.356-.106l.233 6.564c4.261-.688 6.802-4.277 5.722-9.581a12.2 12.2 0 0 0-1.297-3.457a38 38 0 0 1-4.658 6.474");
}
</style><path class="vv-pvim5v"/>`,
		"fallback": "token-branded:yoshi",
	});
}

export default Component;
