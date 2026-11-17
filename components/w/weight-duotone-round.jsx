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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ukvl-hhfo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8h2c1.393 0 2.602.806 3 2l2 6c.656 1.968-.868 4-3 4H8c-2.132 0-3.656-2.032-3-4l2-6c.398-1.194 1.204-2 2-2zm0 0a2 2 0 1 1 0-4m0 0a2 2 0 1 1 0 4");
}

.vz533-b5k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 8h5c1.296.001 2.576.732 3 2l2 6c.671 2.02-.923 3.998-3 4H8c-2.077-.002-3.671-1.98-3-4l2-6c.398-1.194 1.204-2 2-2");
}
</style><g class="ft5dv1b6b"><path class="vz533-b5k"/><path class="ukvl-hhfo"/></g>`,
		"fallback": "coolicons:weight-duotone-round",
	});
}

export default Component;
