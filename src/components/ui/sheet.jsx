import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

function Sheet({ ...props }) {
  return <DialogPrimitive.Root {...props} />;
}

function SheetTrigger({ ...props }) {
  return <DialogPrimitive.Trigger {...props} />;
}

function SheetClose({ ...props }) {
  return <DialogPrimitive.Close {...props} />;
}

const SheetPortal = DialogPrimitive.Portal;
const SheetOverlay = React.forwardRef(function SheetOverlay(
  { className, ...props },
  ref,
) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
        className,
      )}
      {...props}
    />
  );
});

const SheetContent = React.forwardRef(function SheetContent(
  { side = "right", className, children, ...props },
  ref,
) {
  const sideClasses =
    side === "right"
      ? "inset-y-0 right-0 h-full w-full max-w-sm border-l"
      : side === "left"
        ? "inset-y-0 left-0 h-full w-[80vw] max-w-none border-r"
        : side === "bottom"
          ? "inset-x-0 bottom-0 w-full border-t rounded-t-2xl"
          : "inset-x-0 top-0 w-full border-b rounded-b-2xl";

  const animationClasses =
    side === "left"
      ? "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left"
      : side === "right"
        ? "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right"
        : "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom";

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 bg-slate-900 text-white shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out",
          animationClasses,
          sideClasses,
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  );
});

const SheetHeader = function SheetHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 text-left", className)}
      {...props}
    />
  );
};

const SheetTitle = React.forwardRef(function SheetTitle(
  { className, ...props },
  ref,
) {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
});

const SheetDescription = React.forwardRef(function SheetDescription(
  { className, ...props },
  ref,
) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
};
