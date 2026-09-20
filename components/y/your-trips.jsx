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
		"content": `<style>.bg4n4nbna {
  fill: currentColor;
  d: path("M8.5 17.5h7v-1h-7zM7.615 21q-.69 0-1.153-.462T6 19.385V12q0-1.933 1.084-3.425q1.083-1.492 2.762-2.144V6q0-.904.625-1.529T12 3.846t1.529.625T14.154 6v.43q1.679.653 2.762 2.145Q18 10.067 18 12v7.385q0 .69-.462 1.152T16.384 21zm3.231-14.862q.294-.069.577-.104T12 6t.577.034q.283.035.577.105V6q0-.483-.336-.818T12 4.846t-.818.336t-.336.818zm-.408 7.9L12 12.85l1.562 1.189l-.585-1.93l1.562-1.113h-1.93L12 8.961l-.61 2.035H9.462l1.562 1.113z");
}
</style><path class="bg4n4nbna"/>`,
		"fallback": "material-symbols-light:your-trips",
	});
}

export default Component;
