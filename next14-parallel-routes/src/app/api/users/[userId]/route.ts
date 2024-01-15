import { NextRequest, NextResponse } from "next/server";
import { z, ZodError, ZodObject, ZodType } from "zod";

type Params = {
  params: {
    userId: string;
  };
  searchParams: {
    test: string;
  };
};

const createUserPayload = z.object({
  name: z.string().min(1).max(6),
  email: z.string().email(),
  some_id: z.number().optional(),
});

// Validation Wrapper //////////////////////
type ZodSchemaType = ZodType<any, any, any>;

type Schemas =
  | {
      bodySchema?: ZodSchemaType;
      paramsSchema?: ZodSchemaType;
      searchParamsSchema?: ZodSchemaType;
    }
  | undefined;

type GlobalParams = { params: Record<string, string> };

const validationWrapper = function (schemes: Schemas, handler: Function) {
  return async function (req: NextRequest, { params }: GlobalParams) {
    try {
      if (!schemes) return handler(req, { params });

      const { paramsSchema, searchParamsSchema, bodySchema } = schemes;
      const innerReq = await req.clone();

      if (paramsSchema) {
      }

      if (searchParamsSchema) {
      }

      if (bodySchema) {
        const body = await innerReq.json();
        await bodySchema.parseAsync(body);
      }

      return handler(req, { params });
    } catch (error) {
      console.log("Validation error");

      if (error instanceof ZodError) {
        const { fieldErrors } = error.flatten();

        return NextResponse.json(
          {
            message: "Invalid Request",
            errors: fieldErrors,
          },
          { status: 422 }
        );
      }

      return NextResponse.json(
        { message: "Invalid Request", error },
        { status: 422 }
      );
    }
  };
};

export const POST = validationWrapper(
  { bodySchema: createUserPayload },
  async (req: NextRequest) => {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ ...body });
  }
);
