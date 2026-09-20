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
		"content": `<style>.mqzs_qblj {
  fill: currentColor;
  d: path("m20.475 22.05l-7.275-7.3l-.4 1.95h-4l1-5.1l-1.8.7v3.4H6V11l2.4-1.025L.675 2.25L2.1.825l19.8 19.8zM4 20.7q-.825 0-1.412-.587T2 18.7v-3h2v3h3v2zm16-15v-3h-3v-2h3q.825 0 1.413.588T22 2.7v3zm-18 0v-3q0-.425.163-.788t.412-.637L4 2.725V5.7zm15 15v-2h2.975l1.425 1.4q-.25.275-.612.437T20 20.7zM6.825 2.7l-2-2H7v2zM22 17.875l-2-2V15.7h2zM13.5 8.2q-.825 0-1.412-.587T11.5 6.2t.588-1.412T13.5 4.2t1.413.588T15.5 6.2t-.587 1.413T13.5 8.2");
}
</style><path class="mqzs_qblj"/>`,
		"fallback": "material-symbols:zone-person-idle",
	});
}

export default Component;
